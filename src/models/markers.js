const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    note: String,
    image: String,
});

module.exports = mongoose.model('Marker', markerSchema);


