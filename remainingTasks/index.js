const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const shoprouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRouter);



app.use(shoprouter);



app.listen(3000);