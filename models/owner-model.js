const mongoose = require("mongoose")

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },    
    email: String,
    password: String,
    profilePic: String,
    tin: String,
    products:{
        type: Array,
        default: []
    },
})

module.exports = mongoose.model("owner", ownerSchema)