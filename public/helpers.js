// Function to create POIs with the #city value
const createPlaceHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="placeimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.locality}, ${location.region}</p>
    <p>${location.country}</p>`;
}

