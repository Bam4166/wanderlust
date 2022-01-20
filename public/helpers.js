// Function to create POIs with the #city value
const createPlaceHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="placeimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.locality}, ${location.region}</p>
    <p>${location.country}</p>`;
}

//Function to create the weather report
const createWeatherHTML = (currentDay) => {
    console.log(currentDay);
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
            <h2>Temperature (C): ${kelvinToCelsius(currentDay.main.temp)}&deg; C</h2>
            <h2>Condition: ${currentDay.weather[0].description}</h2>
            <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png" class="weathericon">`;
}

//Function to convert kelvin to celsius
const kevinToCelsius = (k) => (k - 273.15).toFixed(0);