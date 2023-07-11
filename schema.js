const mongoose = require("mongoose");

const claim = new mongoose.Schema({
  claim_string: String,
  evidence: [String],
  support: String,
  reason_missing_support: String,
  reliability: String,
  informativeness: String,
  worthiness: String,
  correctness: String,
  revised_claim: String,
  revised_evidence: String,
});

const question = new mongoose.Schema({
  completed: Boolean,
  question_string: String,
  answer_string: String,
  attribution: [String],
  answer_origin_model: String,
  annotator_id: String,
  metadata: {
    question_type: String,
    field: String,
    specific_field: String,
  },
  claims: [claim],
  usefulness: String,
  revised_answer: String,
  time_spent: Number,
});

module.exports = mongoose.model("Question", question, "expertqa-stage2-0710");
