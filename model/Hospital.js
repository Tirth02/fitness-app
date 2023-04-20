const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    hospitalname: {
        type: String,
        trim: true,
        required: 'Hospital name is required'
    },
    address: {
        type: String,
        trim: true,
        required: 'Address is required'
    },
    city: {
        type: String,
        trim: true,
        required: 'Address is required'
    },
    state: {
        type: String,
        trim: true,
        required: 'State is required'
    },
    zip: {
        type: Number,
        trim: true,
        required: 'Zip is Required'
    },
    phone: {
        type: Number,
        trim: true,
        match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
        required: 'Phone is Required',
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

const Hospital = mongoose.model('Hospital',HospitalSchema);

module.exports = Hospital;