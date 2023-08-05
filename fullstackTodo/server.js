const express = require('express');
const cors = require('cors');
const app  = express();
require('dotenv').config();
const sequelize = require('../config/database');
const Todo = require('./models/todo');

app.use(cors());
app.use(express.json());















app.listen(3000,()=>{
    console.log('server running on port 3000');
})