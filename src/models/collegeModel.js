const mongoose = require('mongoose')



const collegeSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        lowercase: true,
        unique:true,
        required: "Name is required"
    },
    fullName: {
        type: String,
        trim: true,
        required: "Full name is required"
    },
    logoLink: {
        type: String,
        required: "link/url is required"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


}, { timestamps: true })


module.exports = mongoose.model('college', collegeSchema)

