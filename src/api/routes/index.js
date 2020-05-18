const express = require('express');
const router = express.Router();
// const User = require('../../models/user');
const getMarkerSchema = require('../../models/markers');

router.get('/', function(req,res) {
    // Synchronous V1 - THIS WORKED DONT TOUCH
    getMarkerSchema.find()
        .then((markers) => {
            res.render('index', {markers:markers});
        })
        .catch((err) => {
            console.log(err);
        })
});


    // Asynchronous V1
    // async function displayAllMarkers() {
    //     const allMarkers = getMarkerSchema.find();
    //     const markers = await allMarkers;
    //     setTimeout(() => {
    //         console.log(markers.results[0])
    //     }, 5000)
    //     return markers;
    // };
    // const markers = displayAllMarkers()
    // // TESTING PROMISE - IT WORKS
    // setTimeout(() => {
    //     console.log(markers)
    // }, 5000)
    // res.render('index', {markers:markers});

    // THIS WILL RUN IN ORDER, AWAIT MEANS IT WILL NOT MOVE ON UNTIL ITS RESOLVED, TEHY ARE GETTING SENT ONE AT A TIME AND ONCE RETURNED


// function printPokemon(results) {
//     for(let pokemon of results) {
//         console.log(pokemon.data.name)
//     }
// }


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

