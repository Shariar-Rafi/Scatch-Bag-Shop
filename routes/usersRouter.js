const express = require("express")
const router = express.Router()
const {registerUser} = require("../controllers/authContoller")
router.get("/", (req,res)=>{
    res.send("hey")
})

router.post("/register", registerUser )

module.exports = router;