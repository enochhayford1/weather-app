const weatherDataHolder = document.getElementById('weather_data');
const form = document.getElementById('form');
const showFormButton = document.getElementById('search_location');
form.style.visibility = 'hidden';
const submitButton = document.getElementById('submit-location');

showFormButton.addEventListener('click', () => {
    form.style.visibility = 'visible'
});



submitButton.addEventListener("click", async () => {
    const weather =  await getWeather(locationSearch.value);
    console.log(weather);

    /* 
        weather.resolvedAddress
        weather.currentConditions.conditions
        weather.currentConditions.temp
        weather.currentConditions.feelslike
        weather.currentConditions.humidity
        weather.description
    */

    const address = document.createElement('p');
    address.textContent = `Weather for: ${weather.resolvedAddress}.`;

    const conditions = document.createElement('p');
    conditions.textContent = `Conditions: ${weather.currentConditions.conditions}`;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${convertToCelcius(weather.currentConditions.temp)}°C`

    const feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels like: ${convertToCelcius(weather.currentConditions.feelslike)}°C`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity is ${weather.currentConditions.humidity}%`;


    const description = document.createElement('p');
    description.textContent = weather.description;

    weatherDataHolder.appendChild(address);
    weatherDataHolder.appendChild(conditions);
    weatherDataHolder.appendChild(temperature);
    weatherDataHolder.appendChild(feelsLike);
    weatherDataHolder.appendChild(humidity);
    weatherDataHolder.appendChild(description);

})