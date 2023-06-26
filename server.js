const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
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

// route redirection for react router
app.get('/questions', (request, response) => {
    response.sendFile(path.join(__dirname, '/build/index.html'))
})

// get all questions and claim data from a specific annotator (given an id)
app.get('/api/questions/:annotator_id', (request, response) => {
    console.log('here')
    Question.find({annotator_id: request.params.annotator_id}).then(questions => {
        response.json(questions)
    }).catch(error => response.json(error))
})

// annotate question
app.patch('/api/annotate/question/:question_id', (request, response) => {
    const body = request.body
    Question.findByIdAndUpdate(request.params.question_id, {$set: {'completed' : body.completed, 'usefulness' : body.usefulness, 'revised_answer': body.revised_answer, 'time_spent': body.time_spent}}).then(question => {
        response.json(question)
    }).catch(error => response.json(error))
})

// annotate claim
app.patch('/api/annotate/question/:question_id/claim/:claim_id', (request, response) => {
    const key = `claims.${request.params.claim_id}`
    const body = request.body
    Question.findByIdAndUpdate(request.params.question_id, {$set: {[key + '.support']: body.support, [key + '.reason_missing_support']: body.reason_missing_support, [key + '.informativeness']: body.informativeness, [key + '.correctness']: body.correctness, [key + '.reliability']: body.reliability, [key + '.worthiness']: body.worthiness, [key + '.revised_claim'] : body.revised_claim, [key + '.revised_evidence']: body.revised_evidence}}).then(question => {
        response.json(question)
    }).catch(error => response.json(error))
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})