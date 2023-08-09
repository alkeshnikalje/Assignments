const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("inside middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("inside another middleware");
})

app.listen(3000);