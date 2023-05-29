const mongoose = require('mongoose')

const claim = new mongoose.Schema({
    claim_string: String,
    evidence: String,
    support: Number,
    reason_missing_support: String,
    informativeness: Number,
    worthiness: Number,
    correctness: Number 
})

const question = new mongoose.Schema({
    completed: Boolean,
    question_string: String,
    answer_string: String,
    attribution: [String],
    answer_origin_model: Number,
    annotator_id: String,
    metadata: {
        question_type: String,
        field: String,
        specific_field: String,

    },
    claims: [claim],
    usefulness: Number,
    revised_answer: String,
})

module.exports = mongoose.model('Question', question)

