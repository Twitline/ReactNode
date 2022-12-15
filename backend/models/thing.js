const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    libelle: { type: String, required: true },
    checked: { type: Boolean, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);