const fs = require('fs')
const data = JSON.parse(fs.readFileSync("client-data.txt"));
            console.log(data.gender); 