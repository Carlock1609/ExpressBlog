

// INITIALIZE map
let mymap = L.map('mapid').setView([45.5051, -122.6750], 13);
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxKey}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

// Figure out if we can make this Asynch
// Loops over response and places all the markers
function displayMarkers() {
    // THIS WORKS. It needed to be stringify on render before we could parse it.
    let allMarkers = document.querySelector('#allMarkers');
    let getValue = allMarkers.getAttribute("value");
    let response = JSON.parse(getValue);

    for(let marker of response) {
        let selectedIcon = L.icon({
            iconUrl: `${marker.image}`,
            iconSize: [30, 50],
            iconAnchor: [10, 50],
            popupAnchor: [5, -45],

            shadowUrl: '../images/Shadow1.png',
            shadowSize: [68, 95],
            shadowAnchor: [27, 65],
        });
        let showMarker = L.marker([marker.lat, marker.lng], {icon: selectedIcon}).addTo(mymap);
        showMarker.bindPopup(`${marker.note} @ ${marker.lat}, ${marker.lng}`).openPopup();
    }
}
displayMarkers()

function onMapClick(e) {
    let lat = document.querySelector('#lat');
    let lng = document.querySelector('#lng');
    console.log(e.latlng)
    let marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    // let user_input = prompt('Please enter in a message');
    // What if we display the Street or the city instead of latlng
    marker.bindPopup(`CLICKED @ ` + e.latlng.toString()).openPopup();
    // marker.setContent(`${user_input} @ ` + e.latlng.toString()).openPopup()
    lat.setAttribute('value', `${e.latlng.lat}`);
    lng.setAttribute('value', `${e.latlng.lng}`);
    lat.setAttribute('placeholder', `${e.latlng.lat}`);
    lng.setAttribute('placeholder', `${e.latlng.lng}`);
}
mymap.on('click', onMapClick);


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

