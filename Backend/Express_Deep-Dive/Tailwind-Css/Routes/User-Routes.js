const express = require('express')
const userRoutes = express.Router()
const path = require('path')
const {registeredHome} = require('./Host-Routes')



userRoutes.get('/',(req,res)=>{
    console.log(registeredHome)
    // res.sendFile(path.join(__dirname,"../","Views","Home.html"))
    res.render('Home',{registeredHome})
})

module.exports = userRoutes