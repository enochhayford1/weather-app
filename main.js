// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY

/* 
weather.resolvedAddress
weather.currentConditions.conditions
weather.currentConditions.temp
weather.currentConditions.feelslike
weather.currentConditions.humidity
weather.description
*/


async function getWeatherDataForLocation(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DAH8L795LG967JGPKPW7BVQEZ`);
    const weatherData = await response.json();
    console.log(weatherData)
    return weatherData;
}

function processWeatherData(weatherData) {
    const requiredInfoKeys = ['currentConditions', 'temp', 'description', 'resolvedAddress'];

    const requiredInfo = Object.fromEntries(
        Object.entries(weatherData).filter(([key]) => {
            return requiredInfoKeys.includes(key)
        })
    );

    return requiredInfo;
}

async function getWeather(location) {
    const weatherData = await getWeatherDataForLocation(location);
    const weather = processWeatherData(weatherData);
    return weather;
}


function convertToCelcius(temp) {
    return ((temp - 32) * 5/9).toFixed(1);
}

function convertToFarenheit(temp) {
    return ((temp * 9/5) + 32).toFixed(1);
}