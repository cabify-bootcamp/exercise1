require('dotenv').config();

const express = require("express");
const axios = require("axios");
const router = express.Router();
const hostname =  process.env.MSG_SERV || 'localhost'
const port = process.env.PORT || '3000'
const validator = require('./validators')

const service = axios.create({
  baseURL: `http://${hostname}:${port}`
});

router.get('/', (req, res, next) => {
    res.send('Hello Messages! \n Must be JSON an have a destination and body keys with values. \n The destination value length must be less than 20 characters and body less than 1000')
});

router.post('/', (req, res, next) => {
  let validMessage = validator.vJsonLengthValidator(req.body)

  if (validMessage.status == 'error') {
    res.send(res.status(500).send('Error: ' + validMessage.comment) )
  }

  const {destination, body} = req.body

  let validBody = validator.vbody(body)
  let validDestination = validator.vdestination(destination)
  
  if (validBody.status === 'error' && validDestination.status === 'error') {
    res.send(res.status(500).send('Error: ' + validBody.comment + ' ' + validDestination.comment) )
  }
  if (validBody.status === 'error') {
    res.send(res.status(500).send('Error: ' + validBody.comment) )
  }
  if (validDestination.status === 'error') {
    res.send(res.status(500).send('Error: ' + validDestination.comment) )
  }


  service.post('/message', {destination, body})
  .then( resp => {
    res.send(`${resp.data}`)
  })
  .catch(err => {
    res.send(err => res.status(500).send('Error: 500'))
  })

});


module.exports = router;