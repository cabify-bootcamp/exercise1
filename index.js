require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const client_port = process.env.CLIENT_PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));

  
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(client_port, () => console.log(`Example app listening on port ${client_port}!`))

const messages = require('./messages');
app.use('/messages', messages);
