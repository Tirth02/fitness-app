const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: 'First Name is required'
    },
    lastname: {
        type: String,
        trim: true,
        required: 'Last Name is Required'
    },
    clinic: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
        required: "Specialty is Required"
    },
    UserCreated: {
        type: Date,
        default: Date.now
    },
});

const Doctor = mongoose.model('Doctor',DoctorSchema);

module.exports = Doctor;