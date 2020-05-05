// leaflet/map testing


let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxKey}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // accessToken: config.mapboxKey
}).addTo(mymap);

// Sets marker on map using coordinates
var marker = L.marker([51.5, -0.09]).addTo(mymap);
// makes marker clickable to popup a message. ***USE THIS FOR CLICKING ON A BEE OR WARNING ICON
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// This pops a message up on specific coordinates. ***Use this for warning messages to stay away from area.
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

// This will be useful when trying to connect sightings together to form a nomans zone.
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

// This lets you click on the map and perform a function.
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);