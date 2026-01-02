const express = require("express")
const userRoutes = express.Router()
const {RegisteredHome} = require("./Host-Routes")

userRoutes.get("/",(req,res)=>{
   res.render("Home.ejs",{RegisteredHome})
})

module.exports = userRoutes