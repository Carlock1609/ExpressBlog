// INITIALIZE map
let mymap = L.map('mapid').setView([45.5051, -122.6750], 13);
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxKey}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);


//  FIGURE OUT IF THE REST NEEDS TO BE IN THE ROUTE TO SAVE THE MARKERS
// OTHERWISE HAVE USERS INPUT DATA, THEN USE ANOTHER FUNCTION TO DISPLAY THAT DATA,
// INSTEAD OF USING THE ONCLICK AND SAVING DATA

let marker = L.marker([45.5051, -122.6750]).addTo(mymap);
marker.bindPopup("MURDER HORNET SIGHTING").openPopup();


// THIS DISPLAYS AN ALERT lets try to figure out how to take the latlng and make a marker instead
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Hornet Sight at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);