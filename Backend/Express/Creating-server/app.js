const express = require('express')

const app = express()

//middleware registration

app.use(express.json())

// route handler registration
// route is a path where the server listen for the request

// URL(uniform resource locater): URL is the address your browser uses to find a website, image, video, file — anything online. so basically it is a complete address including protocol,domain and path(route),params,query and string

//eg:https://www.youtube.com/watch?v=abc123

// route handler is aa function that handles the requested route


app.get('/',(req,res)=>{
    res.send(`<h1>Home page</h1>`)
    console.log('This is a home page')
})


app.post('/profile/:userID',(req,res)=>{
    console.log(req.url)
    console.log(req.body)
    console.log(req.params)
    res.send(`<h1>Data submitted</h1>`)
    console.log("data received")
})

app.listen(1002,()=>{
    console.log(`server is listening`)
})