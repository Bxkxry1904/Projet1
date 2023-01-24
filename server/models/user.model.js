const mongoose = require("mongoose");
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema(
    {
    username:{
        type : String,
        required : true,
        unique : true,
        trim: true
    },
    email:{
        type : String,
        required : true,
        unique : true,
        validate: [isEmail]
    },
    password:{
        type : String,
        required : true
    },
    salt:{
        type: String,
        required:true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User",userSchema);