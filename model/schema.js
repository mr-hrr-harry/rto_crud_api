const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    numberPlate:{
        type: String,
        required: true,
    },
    ownerName:{
        type: String,
        required: true,
    },
    vehicleModel:{
        type: String,
        required: true,
    },
    finePending:{
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('RTO Vehicles data', Schema)