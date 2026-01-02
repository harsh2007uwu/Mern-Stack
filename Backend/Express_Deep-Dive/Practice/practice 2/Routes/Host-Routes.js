const express = require("express")
const hostRoutes = express.Router()
const path = require("path")

hostRoutes.get("/add-home",(req,res)=>{
   res.sendFile(path.join(__dirname,"../","Views","addHome.html"))
})
const RegisteredHome = []
hostRoutes.post("/addedHome",(req,res)=>{
    RegisteredHome.push(req.body)
    console.log(req.body)
   res.sendFile(path.join(__dirname,"../","Views","addedHome.html"))
})

exports.hostRoutes = hostRoutes
exports.RegisteredHome = RegisteredHome