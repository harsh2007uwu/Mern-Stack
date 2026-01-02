const express = require('express')
const hostRoutes = express.Router()
const path = require('path')

hostRoutes.get('/add-home',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Views","Form.html"))
})
const registeredHome = []
hostRoutes.post('/form-submit',(req,res)=>{
    console.log(req.body)
    registeredHome.push(req.body)
    res.sendFile(path.join(__dirname,"../","Views","Submitted.html"))
})


// module.exports = hostRoutes
exports.registeredHome = registeredHome
exports.hostRoutes = hostRoutes