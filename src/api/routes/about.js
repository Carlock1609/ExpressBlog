const express = require('express');
const router = express.Router();
// const User = require('../../models/user');

router.get('/', function(req,res) {
    // Synchronous V1 - THIS WORKED DONT TOUCH
    res.render('pages/about')
});






module.exports = router;

