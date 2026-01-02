// Core Module

const express = require("express")
const app = express()

// Local Module 
const userRoutes = require("./Routes/user-routes")
const hostRoutes = require("./Routes/host-routes")

//Middleware1:parsing body

app.use(express.urlencoded())

//Middleware2
app.use(userRoutes)
app.use(hostRoutes)


const port = 2001
app.listen(port,()=>{
    console.log(`Server Listening At https://localhost:${port}`)
})