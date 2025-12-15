const http = require('http')

const server= http.createServer((req,res)=>{
    res.write(`<h1>hello hi byw bued</h1>`)
    res.end()
})

const port = 1003
server.listen(port,()=>{
    console.log(`server is listening ${port}`)
})