// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY

async function getWeatherData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DAH8L795LG967JGPKPW7BVQEZ`);
    const weather = await response.json();

    console.log(weather);
    console.log(`These are the conditions for: ${weather.address}`);
    console.log(`The current temperature is ${weather.currentConditions.temp}, condtions are ${weather.currentConditions.conditions}`);
}

getWeatherData(`Lancaster`);