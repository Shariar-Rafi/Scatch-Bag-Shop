const mongoose = require("mongoose")
const config = require("config")


mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(()=>{
    console.log("MongoDB Connected.");
})
.catch((err)=>{
    console.log("MongoDB connection error: ", err);
})

module.exports = mongoose.connection;