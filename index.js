/**
 * Required External Modules
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Mongoose example
// const Schema = mongoose.Schema;
// const BlogPost = new Schema({
//     author: ObjectId,
//     title: String,
//     body: String,
//     date: Date
//   });
/**
 * App Variables
 */
// Let express know where to find templates
// Lets express know what template engine we are using 'ejs'
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/ExpressBlog', { 
													useNewUrlParser: true,
													useUnifiedTopology: true,
														});


// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
/**
 *  App Configuration
 */

 
 
/**
 * Routes Definitions
 */
app.get('/', (req,res) => {
    res.render('home')
});

app.get('/user', (req,res) => {
    res.render('userProfile')
})


/**
 * Server Activation
 */
const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log('SERVER IS UP!');
});