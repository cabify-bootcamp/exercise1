require('dotenv').config();

const express = require("express");
const axios = require("axios");
const router = express.Router();
const hostname =  process.env.MSG_SERV || 'localhost'
const port = process.env.PORT

const service = axios.create({
  baseURL: `http://${hostname}:${port}`
});

router.get('/', (req, res, next) => {
    res.send('Hello Messages!')
});

router.post('/', (req, res, next) => {
  const {destination, body} = req.body
  service.post('/message', {destination, body})
  .then( resp => {
    res.send(resp.data)
  })
  .catch(err => {
    res.send(err => res.status(500).send('Error: 500'))
  })
});


module.exports = router;