const express = require('express');
const router = express.Router();
const {addProduct, postProduct} = require('../controllers/adminController');

router.get("/addproduct", addProduct);

router.post("/product",postProduct);


module.exports = router;