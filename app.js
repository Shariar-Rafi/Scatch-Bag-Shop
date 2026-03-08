const express = require("express")
const app = express()
 
const cookieParser = require("cookie-parser")
const path = require("path")
const index = require("./routes/index")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")
require('dotenv').config(); //Load environment variables first

const db = require("./config/mongoose-connection")

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())

app.use("/", index)
app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)

const PORT = 3000;
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup!")
    console.log("Server listening on Port:", PORT);
})