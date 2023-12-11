function getWeather() {
            const apiKey = 'af3ef58adc2c6d98b42aa785fb638cf5';
            const city = document.getElementById('city').value;

            if (!city) {
                alert('Please enter a city.');
                return;
            }

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error.message);
                });
        }

        function displayWeather(data) {
            const resultContainer = document.getElementById('result');

            if (data.cod !== '404') {
                const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
                const description = data.weather[0].description;

                resultContainer.innerHTML = `
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${description}</p>
                `;
            } else {
                resultContainer.innerHTML = 'City not found. Please enter a valid city.';
            }
        }
