const express = require('express')
const app = express()
const path = require('path')
const userRoutes = require('./Routes/User-Routes')
const {hostRoutes} = require('./Routes/Host-Routes')

app.set("view engine","ejs")
app.set("Views","Views")

app.use(express.urlencoded())

app.use(express.static('./Public'))

app.use(userRoutes)
app.use(hostRoutes)



const port = 2000
app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}`)
})