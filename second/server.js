const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {

  fs.readFile('chat.txt','utf-8',(err,data)=>{
    if(err){
        data = err;
    }
    res.send(`
    <html>
      <body>
      ${data}
        <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username');">
          <input type="text" name="message" id="message">
          <input type="hidden" name="username" id="username">
          <button type="submit">Send</button>
        </form>
      </body>
    </html>
  `);
  })
});

app.post('/', (req, res) => {
  const user = req.body.username;
  const msg = req.body.message;
  fs.writeFile('chat.txt',`${user}: ${msg}`,{ flag: 'a' },(err)=>{
    if(err){
        console.log(err);
    }
    res.redirect('/');
  })

});

app.get('/login', (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/" method="GET" onsubmit="localStorage.setItem('username', document.getElementById('username').value);">
          <input type="text" name="username" id="username">
          <button type="submit">Send</button>
        </form>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});