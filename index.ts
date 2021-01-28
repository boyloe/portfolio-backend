import express from 'express'
const fetch = require('node-fetch')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app:express.Application = express()
const port = 4000
const blogApiKey:string|undefined = process.env.DEV_API_KEY

fetch("https://dev.to/api/articles/me", {
    headers: {
        "Api-Key": `${blogApiKey}`
    }
})
.then((response:any) => response.json())
.then(console.log)

app.get('/blogposts', (_, response) => { 
    response.json()
})

app.listen(port)