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

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors())
app.use(express.static('build'))

// routes
// app.get('/api/questions', (request, response) => {
//     Question.find({}).then(questions => {
//         response.json(questions)
//     })
// })

// get all questions and claim data from a specific annotator (given an id)
app.get('/api/questions/:annotator_id', (request, response, next) => {
    Question.find({annotator_id: request.params.annotator_id}).then(questions => {
        response.json(questions)
    }).catch(error => next(error))
})

// annotate question
app.patch('/api/annotate/question/:question_id', (request, response) => {
    const body = request.body
    Question.findByIdAndUpdate(request.params.question_id, {$set: {'usefulness' : body.usefulness, 'revised_answer': body.revised_answer, 'time_spent': body.time_spent}}).then(question => {
        response.json(question)
    }).catch(error => response.json(error))
})

// annotate claim
app.patch('/api/annotate/question/:question_id/claim/:claim_id', (request, response) => {
    const key = `claims.${request.params.claim_id}`
    const body = request.body
    Question.findByIdAndUpdate(request.params.question_id, {$set: {[key + '.support']: body.support, [key + '.reason_missing_support']: body.reason_missing_support, [key + '.informativeness']: body.informativeness, [key + '.correctness']: body.correctness, [key + '.reliability']: body.reliability, [key + '.worthiness']: body.worthiness}}).then(question => {
        response.json(question)
    }).catch(error => response.json(error))
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})