const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// MongoDB Connection
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGODB_URI)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })
  
const Note = mongoose.model('Note', noteSchema)

// middleware for logging requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/api/questions', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})