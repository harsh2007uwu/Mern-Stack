const express = require("express")
const app = express()
const path = require("path")
const userRoutes = require("./Routes/User-Routes")
const {hostRoutes} = require("./Routes/Host-Routes")

// MiddleWares
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname,"./Public")))
app.use(userRoutes)
app.use(hostRoutes)

const port = 2000
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})