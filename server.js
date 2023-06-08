const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001
// MongoDB Connection
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGODB_URI)

const Question = require('./schema.js')

// middleware for logging requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors())

// routes
// app.get('/api/questions', (request, response) => {
//     Question.find({}).then(questions => {
//         response.json(questions)
//     })
// })

app.get('/api/questions/:annotator_id', (request, response) => {
    Question.find({annotator_id: request.params.annotator_id}).then(questions => {
        response.json(questions)
    })
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})