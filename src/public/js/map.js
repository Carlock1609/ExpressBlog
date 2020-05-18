// REQUIRE is a node.js serverside, Figureout how to get the client side working
// const mongoose = require('mongoose');
// const getMarkerSchema = require('../../models/markers');

// import { set } from "mongoose";

// console.log('type is ' + typeof getMarkerSchema)

// console.log('calling the function...')
// getMarkerSchema({}, function(req, res) {
//     console.log(res)
//     console.log(req)
// })

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

// Form handling to routes
// Figuring out how to select individual inputs

function onMapClick(e) {
    let lat = document.querySelector('#lat');
    let lng = document.querySelector('#lng');

    let marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    // let user_input = prompt('Please enter in a message');
    // What if we display the Street or the city instead of latlng
    marker.bindPopup(`CLICKED @ ` + e.latlng.toString()).openPopup();
    // marker.setContent(`${user_input} @ ` + e.latlng.toString()).openPopup()
    lng.setAttribute('value', `${e.latlng.lat}`);
    lat.setAttribute('value', `${e.latlng.lng}`);
    lng.setAttribute('placeholder', `${e.latlng.lat}`);
    lat.setAttribute('placeholder', `${e.latlng.lng}`);
}
mymap.on('click', onMapClick);


// Check previous code at this point, I got a little confused. I injected the promise, but now were trying to asynchronally display the data when it gets here
// Figure out how to turn string into a JSON or dictionary
let allMarkers = document.querySelector('#allMarkers');
allMarkers.getAttribute('value');
// setTimeout(() => {
//     let markers = JSON.stringify(allMarkers.getAttribute('value'));
// }, 5000)

// async function displayMarker() {
//     let markers = allMarkers.innerHTML(allMarkers.value)
//     console.log(markers)
//     await markers
// }
// displayMarker()
// async function promisedMarkers() {
//     let showObject = await allMarkers.value 
//     showObject.
//     return showObject
// }


// find all athletes who play tennis, selecting the 'name' and 'age' fields
// Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
//   if (err) return handleError(err);
//   // 'athletes' contains the list of athletes that match the criteria.
// })
// SEEDING DATA
 
// for(let marker in getMarkerSchema.find()) {
//     console.log(marker)
//     console.log('hello')
//     // let placeMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
// }
// getMarkerSchema.find().then((marker) => {
//     console.log({marker})
// }).catch((err) => {
//     console.log(err)
// })
// THIS SAYS ITS NOT A FUNCTION BUT WHEN DOING TYPEOF IT IS
// getMarkerSchema.find()
//     .then((markers) => {
//         for(let marker of markers) {
//             console.log(marker)
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// console.log(Marker.find().then((marks) => {
// 	for(let mark of marks) {
// 		console.log(mark.lat)
// 	}
// }).catch((err) => {
// 	console.log(err)
// })
// )


// StackoverFlow ideas
// User.find().then((users)=>{
//     res.send({users});
//      }).catch((err)=>{
//        res.status(400).send(err);
//       });
// YelpCamp Example for making queries

// INDEX ROUTE
// router.get('/', function(req, res) {
// 	console.log(req.user)
// 	Campground.find({}, function(err, allCampgrounds) {
// 		if(err) {
// 			console.log(err)
// 		} else {
// 			res.render('campgrounds/index', {campgrounds: allCampgrounds, currentUser: req.user});
// 		}
// 	})
// });

//  FIGURE OUT IF THE REST NEEDS TO BE IN THE ROUTE TO SAVE THE MARKERS
// OTHERWISE HAVE USERS INPUT DATA, THEN USE ANOTHER FUNCTION TO DISPLAY THAT DATA,
// INSTEAD OF USING THE ONCLICK AND SAVING DATA
// function onMapClick(e) {
//     let marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
//     let user_input = prompt('Please enter in a message');
//     // What if we display the Street or the city instead of latlng
//     marker.bindPopup(`${user_input} @ ` + e.latlng.toString()).openPopup();
//     // marker.setContent(`${user_input} @ ` + e.latlng.toString()).openPopup()
// }
// mymap.on('click', onMapClick);