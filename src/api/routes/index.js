const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const getMarkerSchema = require('../../models/markers');

router.get('/', function(req,res) {
// Trying to figure out how to pass in map to display
    async function displayAllMarkers() {
        const getAllMarkers = await getMarkerSchema.find()
        return getAllMarkers;
    }

    markers = displayAllMarkers();
    res.render('/', {markers=markers});
});
// console.log(Marker.find().then((marks) => {
// 	for(let mark of marks) {
// 		console.log(mark.lat)
// 	}
// }).catch((err) => {
// 	console.log(err)
// })
// )

router.post('/', function(req,res) {    
    let lat = req.body.lat;
    let lng = req.body.lng;
    let note = req.body.note;
    let image = req.body.image;

    let newMarker = getMarkerSchema.create(lat=lat, lng=lng, note=note, image=image);

    getMarkerSchema.create(newMarker, function(err, newlyCreated) {
        if(err) {
            console.log('Not Successful' + err);
        } else {
            console.log('Success!' + newlyCreated);
        }
    });
    
    res.redirect('/');
})

module.exports = router;

