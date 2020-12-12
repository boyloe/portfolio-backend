import express = require('express')
import fetch = require('node-fetch')


const app:express.Application = express()
const port = 4000
const blogApiKey:string = process.env.DEV_API_KEY

fetch("https://dev.to/api/articles/me", {
    headers: {
        "Api-Key": `${blogApiKey}`
    }
})
    .then(response => response.json())
    .then(console.log)

app.get('/blogposts', (request, response) => { 

})

app.listen(port)