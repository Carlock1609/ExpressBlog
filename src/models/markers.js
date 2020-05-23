const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    note: String,
    // RENAME THIS TO ICON - for the selection on the form
    image: String,
});

module.exports = mongoose.model('Marker', markerSchema);


