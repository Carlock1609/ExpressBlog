const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const getMarkerSchema = require('../../models/markers');

router.get('/', function(req,res) {
// Trying to figure out how to pass in map to display
    markers = getMarkerSchema.find()
    // Request testing
    console.log(req.body)

    context = {
        'markers': markers,
    }

    res.render('index', context)
})

router.post('/', function(req,res) {
    markers = getMarkerSchema.find();
    
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

