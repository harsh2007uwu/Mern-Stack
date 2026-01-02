const express = require('express')
const hostRoutes = express.Router()
const path = require('path')

hostRoutes.get('/add-home',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Views","Form.html"))
})
hostRoutes.post('/form-submit',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","Views","Submitted.html"))
    console.log(req.body)
})


module.exports = hostRoutes