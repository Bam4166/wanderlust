// OpenWeather API info
const openWeatherKey = '<YOUR API KEY HERE>';
const urlWeather = '';

// Foursquare API info
const foursquareKey = '<YOUR API KEY HERE>';
const url = '';

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
    }
};

// AJAX Functions 

const getPlaces = () => {

}

const getWeather = () => {
    
}