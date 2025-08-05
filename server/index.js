import express from 'express'
import  { fetchQuotes } from './data/quotes.js'

const server = express()
const port = 8000

server.get('/quotes', async function(req, res) {
    const response = await fetchQuotes(req, res)
    res.send(response)
})

server.listen(port, function() {
    console.log("Listening on " + port)
})