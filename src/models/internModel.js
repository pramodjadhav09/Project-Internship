const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            }, message: "Please provide a valid email address"
        }
    },
    mobile: {
        type: String,
        required: "Mobile number is required",
        unique: true,
        validate: {
            validator: function validatePhoneNumber(number) {
                var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

                return re.test(number);
            }, message: "Please provide a valid mobile number"
        }
    },
    collegeId: {
        type: objectId,
        ref: "college"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })


module.exports = mongoose.model('intern', internSchema)

