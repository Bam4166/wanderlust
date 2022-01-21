// OpenWeather API info
const openWeatherKey = '<YOUR API KEY HERE>';
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather';

// Foursquare API info
const foursquareKey = '<YOUR API KEY HERE>';
const url = 'https://api.foursquare.com/v3/places/search?near=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $placeDivs = [$("#place1"), $('#place2'), $('#place3'), $('#place4')];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: '<YOUR FOURSQUARE API KEY HERE>' 
    }
};

// AJAX Functions 

const getPlaces = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10`;
    try {
        const response = await fetch(urlToFetch, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            const places = jsonResponse.results;
            return places;
        }
    } catch(error) {
        console.log(error);
    }
}

const getWeather = async () => {
    const urlToFetch = `${urlWeather}?q=${input.val()}&APPID=${openWeatherKey}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

// Render functions


// Search function
const executeSearch = () => {
    $placeDivs.forEach(place => place.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getPlaces();
    getWeather();
    return false;
}

$submit.click(executeSearch);