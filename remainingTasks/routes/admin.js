const express = require('express');
const router = express.Router();

router.get("/addproduct",(req,res)=>{
    res.send("<form action = '/product' method = 'POST'><input type = 'text' name = 'title'><input type = 'text' name = 'size'><button type = 'submit'>Send</button></form>");
});

router.post("/product",(req,res)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
})


module.exports = router;