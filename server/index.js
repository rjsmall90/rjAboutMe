import express from 'express'
import  { fetchQuotes } from './data/quotes'

const server = express()
const port = 8000

server.get('/quotes', function(req, res) {
    const response = fetchQuotes(req, res)
    res.send(response)
})

// server.get('/quotes', async function (req,res) {
//     let response
//     try {
//         response = await routeAPINames(req, res)
//     } catch (err) {
//         console.log(err)
//     }

//     res.send(response)
// })

server.listen(port, function() {
    console.log("Listening on " + port)
})