const express = require('express')
const userRoutes = express.Router()
const path = require('path')

userRoutes.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Views","Home.html"))
})

module.exports = userRoutes