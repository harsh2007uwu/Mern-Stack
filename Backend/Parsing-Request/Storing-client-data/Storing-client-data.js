const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration-Form</title>
    <style>

        *{
            margin: 0;
            padding: 0;
        }
        body{
            font-family: "Roboto" , sans-serif;
            height: 100vh;
             display: flex;
             align-items: center;
            justify-content: center;
        }
        
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
            height: 400px;
            width: 600px;
            border-radius: 10px;
            box-shadow: 0 0 20px black;

        }
        .name-container label{
            font-size: large;
            font-weight: bold;
        }
        #name{
            padding: 12px;
            width: 250px;
            border-radius: 7px;
            font-weight: bold;
        }
        #name:focus{
            outline: none;
            border: 2px solid red;
        }
        .gender-container p{
            font-size: large;
            font-weight: bold;
            margin-bottom: 10px;
        }
        button{
            padding: 15px;
            width: 300px;
            border: 2px solid yellow;
            background-color: lightblue;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <form action="/form-submit" method="POST">

        <div class="container">

            <div class="name-container">
                <label for="name">Name:</label>
                <input type="text" placeholder="Enter Your Name" name="name" id="name">

            </div>

            <div class="gender-container">

                <p>
                    Gender:
                </p>

                <label for="male">Male:</label>
                <input type="radio" name="gender" id="male" value="male">

                <label for="female">Female:</label>
                <input type="radio" name="gender" id="female" value="female">

                <label for="other">Other:</label>
                <input type="radio" name="gender" id="other" value="other">


            </div>

            <button type="submit">Submit</button>

        </div>



    </form>
</body>
</html>`)

            res.end()
            return
    }

    else if(req.url==='/form-submit' && req.method==='POST'){
        res.write('Your Registration Form Have Been Submitted Successfully')
        console.log('Form Submitted')

        let body  = []
        req.on("data",(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on("end",()=>{
            const parsebody = Buffer.concat(body).toString()
            console.log(parsebody)

            const params = new URLSearchParams(parsebody)
            let jsonobj = {}

            for(const item of params){
                const [key,value] = item
                jsonobj[key]=value
            }
            console.log(jsonobj)
            fs.writeFileSync("client-data.txt", JSON.stringify(jsonobj))

        })
        res.end()
        return
    }
})

server.listen(1002,()=>{
    console.log('server is running at 1002')
})