const express = require('express')
const path = require('path')
const hostRoutes = express.Router()

hostRoutes.get("/add-home",(req,res)=>{
    res.sendFile()
})

module.exports = hostRoutes