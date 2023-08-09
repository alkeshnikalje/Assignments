const express = require('express');

exports.addProduct = (req,res)=>{
    res.send("<form action = '/product' method = 'POST'><input type = 'text' name = 'title'><input type = 'text' name = 'size'><button type = 'submit'>Send</button></form>");
}

exports.postProduct = (req,res)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
}