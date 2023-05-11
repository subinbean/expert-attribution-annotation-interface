require('dotenv').config()

const express = require('express')

const app = express()

const routes = require('./routes.js')
 
// middleware for logging requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// routes
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})