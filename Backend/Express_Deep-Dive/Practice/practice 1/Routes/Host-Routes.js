const express = require("express")
const hostRoutes = express.Router()
const path = require("path")

hostRoutes.get("/host/add-home",(req,res)=>{
   res.sendFile(path.join(__dirname,"../","Views","add-home.html"))
})
const RegisteredHomes = []
hostRoutes.post("/host/added",(req,res)=>{
    console.log(req.body)
    RegisteredHomes.push(req.body)
   res.sendFile(path.join(__dirname,"../","Views","added-home.html"))
})

exports.RegisteredHomes = RegisteredHomes
exports.hostRoutes = hostRoutes