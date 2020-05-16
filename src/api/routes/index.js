const express = require('express');
const router = express.Router();
const User = require('../../models/user');
// const mongoose = require('mongoose');
// const getMarkerSchema = require('../../models/markers');

router.get('/', function(req,res) {
    // Trying to figure out how to pass in map to display

    context = {

   }
    res.render('index', context)
})


module.exports = router;

