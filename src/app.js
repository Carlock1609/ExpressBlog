const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

// importing routes
// Let express know where to find templates
let indexRoutes = require('./api/routes/index');
let aboutRoutes = require('./api/routes/about');



app.use(express.json()); //Used to parse JSON bodies
// Lets express know what template engine we are using 'ejs'
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies
app.use(require('express-session')({
	secret: 'This is the Secret session',
	resave: false,
	saveUninitialized: false
}));
app.set('view engine', 'ejs');
// Sets base directory to look for static files
app.use(express.static(__dirname + '/public')); 
// I think were going to want to change the name of DB, just come back to this when resetting
mongoose.connect('mongodb://localhost/MurderHornetTracking', { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// PASSPORT AUTH
app.use(require('express-session')({
	secret: 'This is the Secret session',
	resave: false,
	saveUninitialized: false
}));

// let passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
// PASSPORT LOCAL AUTH
// passport.use(User.createStrategy());
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




// connecting route examples
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
// app.use('/campgrounds/:id/comments', commentRoutes);




const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log('SERVER IS UP!');
});