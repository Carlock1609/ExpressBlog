const express = require('express');
const router = express.Router();
// const User = require('../../models/user');
const getMarkerSchema = require('../../models/markers');

router.get('/', function(req,res) {
    // Synchronous V1 - THIS WORKED DONT TOUCH
    //     Now if you want to print the actual JSON, use:
    // console.log(JSON.stringify(checklist_data));
    // You were almost there in your code, but you called console.log with not yet serialized object.
    // edit Ok looking at your code you're better off not deserializing from JSON at all.
    getMarkerSchema.find()
        .then((markers) => {

            res.render('index', {markers:JSON.stringify(markers)});
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

    let newMarker = {lat:lat, lng:lng, note:note, image:image};

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

