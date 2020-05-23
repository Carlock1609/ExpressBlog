const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const getMarkerSchema = require('../../models/markers');

// AUTH
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');


// Get index page
router.get('/', function(req,res) {
    // Synchronous V1 - THIS WORKED DONT TOUCH
    //     Now if you want to print the actual JSON, use:
    // console.log(JSON.stringify(checklist_data));
    // You were almost there in your code, but you called console.log with not yet serialized object.
    // edit Ok looking at your code you're better off not deserializing from JSON at all.
    getMarkerSchema.find()
        .then((markers) => {

            res.render('index', {markers:JSON.stringify(markers), currentUser:req.user});
        })
        .catch((err) => {
            console.log(err);
        })
});

// Created marker
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

//  Register page
router.get('/register', function(req,res) {
    res.render('register');
})

// Register post
router.post('/register', function(req,res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req,res, function(){
            console.log(user)
            res.redirect('/')
        });
    });
})

// LOGIN ROUTES
// This is middleware
router.post('/login', passport.authenticate('local', 
	{
		successRedirect: '/',
		failureRedirect: '/',
	}), function(req, res) {
        // fill this soon
});
// // Logout route
router.get('/logout', function(req,res) {
    req.logout();
    req.flash('success', 'Logged out!');
    res.redirect('/');
});


module.exports = router;







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