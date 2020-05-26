const express = require('express');
const router = express.Router();

// Displays about page
router.get('/', function(req,res) {
    res.render('pages/about', {currentUser:req.user});
});



module.exports = router;

