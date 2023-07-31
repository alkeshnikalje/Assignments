const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const body = [];

    if(url === '/'){

        fs.readFile("message.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }
            res.write(`<html>
            <head>
              <title>enter message</title>
            </head>
            <body>
            ${data}
            <form action = "/message" method = "POST">
            <input type = "text" name = "message">
            <button type = "submit">Send</button>
            </form>
            </body>
            </html>`)
            return res.end();
        })

    }else if(url === "/message" && req.method === "POST"){
        req.on("data",(chunk)=>{
            body.push(chunk);
        })
        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                if(err){
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end();
            })
        })  
    }
})




server.listen(3000);