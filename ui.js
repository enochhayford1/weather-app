const weatherDataHolder = document.getElementById('weather_data');
const form = document.getElementById('form');
const showFormButton = document.getElementById('search_location');
form.style.visibility = 'hidden';
const submitButton = document.getElementById('submit-location');

showFormButton.addEventListener('click', () => {
    form.style.visibility = 'visible'
});



submitButton.addEventListener("click", async () => {
    
    form.style.visibility = 'hidden';
    showFormButton.style.visibility = 'hidden';
    
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
    temperature.classList.add('c');

    const feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels like: ${convertToCelcius(weather.currentConditions.feelslike)}°C`;
    feelsLike.classList.add('c');

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity is ${weather.currentConditions.humidity}%`;


    const description = document.createElement('p');
    description.textContent = weather.description;

    const changeUnit = document.createElement('button');
    changeUnit.textContent = 'Change unit';

    changeUnit.addEventListener('click', () => {
        const tempToConvert = weather.currentConditions.temp;
        const feelsLikeToConvert = weather.currentConditions.feelsLike;

        if (temperature.classList.contains('c')) {
            temperature.textContent = `Temperature: ${weather.currentConditions.temp}°F`;
            feelsLike.textContent = `Feels like: ${weather.currentConditions.feelslike}°F`;

            temperature.classList.remove('c');
            feelsLike.classList.remove('c');

            temperature.classList.add('f');
            feelsLike.classList.add('f');
        } else {
            temperature.textContent = `Temperature: ${convertToCelcius(weather.currentConditions.temp)}°C`
            feelsLike.textContent = `Feels like: ${convertToCelcius(weather.currentConditions.feelslike)}°C`;

            temperature.classList.add('c');
            feelsLike.classList.add('c');

            temperature.classList.remove('f');
            feelsLike.classList.remove('f');
        }
    });

    const refresh = document.createElement('button');
    refresh.textContent = 'Search again';

    refresh.addEventListener('click' ,() => {
        window.location.reload();
    });


    weatherDataHolder.appendChild(address);
    weatherDataHolder.appendChild(conditions);
    weatherDataHolder.appendChild(temperature);
    weatherDataHolder.appendChild(feelsLike);
    weatherDataHolder.appendChild(humidity);
    weatherDataHolder.appendChild(description);
    weatherDataHolder.appendChild(changeUnit);
    weatherDataHolder.appendChild(refresh);


});