import cors from 'cors'
import dotenv from 'dotenv';
import express from 'express'
import nodemailer from 'nodemailer'

import { fetchQuotes, fetchSkills } from './functions/routes.js'
import { githubFetchAllRepos } from './github/apiConnec.js';

const server = express()
const port = 8000

server.use(cors())
server.use(express.json())
dotenv.config()

server.get('/quotes', async function(req, res) {
    const response = await fetchQuotes(req, res)
    res.send(response)
})

server.get('/skills', async function(req, res) {
    const response = await fetchSkills(req, res)
    res.send(response)
})

server.get('/github_repos', async function(req, res) {
  const response = await githubFetchAllRepos(req, res)
  res.send(response)
})

server.post('/contact', async (req, res) => {
  const { contact_name, contact_email, contact_message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL_ADDRESS,
      pass: process.env.REACT_APP_EMAIL_PASSWORD,
    }
  })

  await transporter.sendMail({
    from: contact_email,
    to: process.env.REACT_APP_EMAIL_ADDRESS,
    subject: `New contact from ${contact_name} - ${contact_email}`,
    text: contact_message,
  })

  res.status(200).send('Message sent!');
})


server.listen(port, function() {
    console.log("Listening on " + port)
})