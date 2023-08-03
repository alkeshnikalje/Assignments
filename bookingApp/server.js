const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const People = require('./models/people');
const peopleRouter = require('./routes/people');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',peopleRouter);





sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync()
.then((result)=>{
    // console.log(result);
})
.catch((err)=>{
    console.log(err);
})





app.listen(3000,()=>{
    console.log('listening on port 3000');
})
