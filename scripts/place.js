document.addEventListener('DOMContentLoaded', function () {
    async function getWeatherData(lat, lon) {
        const url = `https://api.weather.gov/points/${lat},${lon}`;

        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'heavenlyhelp.com'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const forecastUrl = data.properties.forecast;
            const forecastResponse = await fetch(forecastUrl, {
                headers: {
                    'User-Agent': 'heavenlyhelp.com'
                }
            });
            if (!forecastResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const forecastData = await forecastResponse.json();
            displayWeather(forecastData.properties.periods[0]);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    function displayWeather(data) {
        const temperature = document.getElementById('temp');
        const conditions = document.getElementById('conditions');
        const wind = document.getElementById('wind');
        const chill = document.getElementById('chill');
        
        temperature.innerHTML = `${data.temperature}°F`;
        conditions.innerHTML = `${data.shortForecast}`;
        wind.innerHTML = `${data.windSpeed} ${data.windDirection}`;
        chill.innerHTML = `${data.windChill ? data.windChill : 'N/A'}`;
    }

    // Get weather data for Burlington, Vermont
    getWeatherData(44.4759, -73.2121);
});
