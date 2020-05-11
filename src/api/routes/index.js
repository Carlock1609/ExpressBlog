const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', function(req,res) {
    // Trying to figure out how to pass in map to display
    async function getMap() {
        let mymap = await L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxKey}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(mymap);
    }
    getMap()
        .catch((err) => {
            console.log('CAUGHT!!', err)
        })

    context = {
        'map': getMap(),
   }
    res.render('base', context)
})


module.exports = router;

