const express = require('express');
const cors = require('cors');
const app  = express();
require('dotenv').config();
const sequelize = require('./config/database');
const Todo = require('./models/todo');
const todoRouter = require('./routes/todo');

app.use(cors());
app.use(express.json());

app.use('/api',todoRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.sync()
  .then((res)=>{
    // console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });













app.listen(3000,()=>{
    console.log('server running on port 3000');
})