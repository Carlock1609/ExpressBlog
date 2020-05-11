/**
 * Required External Modules
 */
const {MongoClient} = require('mongodb');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// importing models
const User = require('./models/user');
// importing routes
const indexRoutes = require('./api/routes/index')

// Let express know where to find templates
// Lets express know what template engine we are using 'ejs'
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies
app.set('view engine', 'ejs');
// Sets base directory to look for static files
app.use(express.static(__dirname + '/public')); 
mongoose.connect('mongodb://localhost/MurderBeeTracker', { 
													useNewUrlParser: true,
													useUnifiedTopology: true,
														});

 
// SEEDING WORKS
// User.create({username: 'Carlock', password: 'Yates906'}, function (err, createdUser) {
//     if (err) {
//         return handleError(err)
//     } else {
//         console.log(createdUser)
//     }
// })

// connecting route examples
app.use('/', indexRoutes);
// app.use('/campgrounds', campgroundRoutes);
// app.use('/campgrounds/:id/comments', commentRoutes);




const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log('SERVER IS UP!');
});