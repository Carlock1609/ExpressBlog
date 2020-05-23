/**
 * Required External Modules
 */
// const {MongoClient} = require('mongodb');
let express = require('express');
let app = express();
let mongoose = require('mongoose');
let passport = require('passport');
let flash = require('connect-flash');
let passport = require('passport');
let LocalStrategy = require('passport-local');

// importing routes
// Let express know where to find templates
let indexRoutes = require('./api/routes/index');
let aboutRoutes = require('./api/routes/about');



app.use(express.json()); //Used to parse JSON bodies
// Lets express know what template engine we are using 'ejs'
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies
app.set('view engine', 'ejs');
// Sets base directory to look for static files
app.use(express.static(__dirname + '/public')); 
// I think were going to want to change the name of DB, just come back to this when resetting
mongoose.connect('mongodb://localhost/MurderHornetTracking', { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// passport authentication
app.use(passport.initialize());
app.use(passport.session());



// SEEDING WORKS
// User.create({username: 'Carlock', password: 'Yates906'}, function (err, createdUser) {
//     if (err) {
//         return handleError(err)
//     } else {
//         console.log(createdUser)
//     }
// })
// PORTLAND [45.5051, -122.6750]
// Marker.create(
// 	{
// 		lat: 45.5067,
// 		lng: -122.6747,
// 		note: 'Remains of dead bees heads here',
// 		image: 'file_location2',
// 	}, function(err, createdMarker) {
// 		if (err) {
// 			return handleError(err);
// 		} else {
// 			console.log(createdMarker);
// 		}
// 	}
// );

// THIS IS WHAT I NEED ON MAP.JS
// console.log(Marker.find().then((marks) => {
// 	for(let mark of marks) {
// 		console.log(mark.lat)
// 	}
// }).catch((err) => {
// 	console.log(err)
// })
// )


// connecting route examples
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
// app.use('/campgrounds/:id/comments', commentRoutes);




const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log('SERVER IS UP!');
});