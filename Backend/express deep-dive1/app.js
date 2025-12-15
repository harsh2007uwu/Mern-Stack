const express = require('express')
const app = express()


//middleware registration

//middleware 1:parsing

app.use(express.urlencoded())

//route handler registration
app.get('/',(req,res)=>{
    res.send(`
        <h1>Welcome to airbnb</h1>
        <br>
        <a href="http://localhost:2000/addhome">Add Home</a>

        `)
})
app.get('/addhome',(req,res)=>{
    res.send(`
        <h1>Register your home here</h1>
        <form action="/submitted" method="POST">
        <input type="text" placeholder="enter the name of your house" name="house-name">
        <button type="submit">Submit</button>  
        </form>
        `)
})
app.post('/submitted',(req,res)=>{
    console.log(req.body)
    res.send(`
        <h1>Successfully submitted your home</h1>
        <a href="http://localhost:2000/">Go to Home</a>
        `)
})
const port = 2000

app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`)
})