// REQUIRE is a node.js serverside, Figureout how to get the client side working
// const mongoose = require('mongoose');
// const markerDB = require('./models/markers');

// WORK ON DISPLAYING THE SEEDED DATA FIRST, THEN FIGURE OUT HOW TO GET THE USER INPUT

// INITIALIZE map
let mymap = L.map('mapid').setView([45.5051, -122.6750], 13);
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxKey}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

// SEEDING DATA
// for(let marker in markerDB) {
//     console.log(marker)
//     // let placeMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
// }

//  FIGURE OUT IF THE REST NEEDS TO BE IN THE ROUTE TO SAVE THE MARKERS
// OTHERWISE HAVE USERS INPUT DATA, THEN USE ANOTHER FUNCTION TO DISPLAY THAT DATA,
// INSTEAD OF USING THE ONCLICK AND SAVING DATA
function onMapClick(e) {
    let marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    let user_input = prompt('Please enter in a message');
    // What if we display the Street or the city instead of latlng
    marker.bindPopup(`${user_input} @ ` + e.latlng.toString()).openPopup();
    // marker.setContent(`${user_input} @ ` + e.latlng.toString()).openPopup()
}
mymap.on('click', onMapClick);