const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use("/addproduct",(req,res,next)=>{
    res.send("<form action = '/product' method = 'POST'><input type = 'text' name = 'title'><input type = 'text' name = 'size'><button type = 'submit'>Send</button></form>");
})


app.post("/product",(req,res)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
})

app.use("/",(req,res,next)=>{
    res.send("<h1>hello from express</h1>");
})



app.listen(3000);