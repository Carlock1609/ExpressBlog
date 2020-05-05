const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', function(req,res) {
    let users = User.find()
    context = {
        'users': users
    }
    res.render('index')
})


module.exports = router;

