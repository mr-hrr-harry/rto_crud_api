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

modules.export = mongoose.model('RTO data', Schema)