// require('dotenv').config();
import express from 'express'
import nodemailer from 'nodemailer'

import  { fetchQuotes } from './data/quotes.js'
import { fetchSkills } from './data/skills.js'

const server = express()
const port = 8000

server.get('/quotes', async function(req, res) {
    const response = await fetchQuotes(req, res)
    res.send(response)
})

server.get('/skills', async function(req, res) {
    const response = await fetchSkills(req, res)
    res.send(response)
})

server.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL_ADDRESS,
      pass: process.env.REACT_APP_EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.REACT_APP_EMAIL_ADDRESS,
    subject: `New contact from ${name}`,
    text: message,
  });

  res.status(200).send('Message sent!');
})

server.listen(port, function() {
    console.log("Listening on " + port)
})