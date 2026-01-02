const express = require("express")
const userRoutes = express.Router()
// const path = require("path")
const {RegisteredHomes} = require("./Host-Routes")



userRoutes.get("/",(req,res)=>{
   res.render("home.ejs",{RegisteredHomes})

})


module.exports = userRoutes