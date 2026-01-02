const express = require("express")
const app = express()
const path = require("path")
const userRoutes = require("./Routes/User-Routes")
const {hostRoutes} = require("./Routes/Host-Routes")

app.set('view engine','ejs')
app.set('views','views')
// Middleware 1
app.use(express.static(path.join(__dirname,"./","Public")))

// Middleware 2
app.use(express.urlencoded())

app.use(userRoutes)
app.use(hostRoutes)

const port = 2000
app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}`)
})