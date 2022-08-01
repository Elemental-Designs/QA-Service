const {
  readQuestions,
  readAnswers,
  insertQuestion,
  insertAnswer,
  updateQuestionHelpful,
  updateReportQuestion,
  updateAnswerHelpful,
  updateReportAnswer
} = require('./qaModel.js');

const handleResponse = (res, data, code) => res.status(code).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = {

  // get list of questions (/questions)
  getQuestions(req, res) {
    console.log(req.query);
    let params = {
      product_id: req.query.product_id,
      page: req.params.page || 1,
      count: req.params.count || 5,
    }
    readQuestions(params)
    .then(({rows})=> handleResponse(res, rows[0], 200))
    .catch(err => handleError(res, err));
  },

  // get list of answers from specific question (:question_id/answers)
  getAnswers(req, res) {
    let params = {
      question_id: req.params.question_id,
      page: req.query.page || 1,
      count: req.qeury.count || 5
    }
    readAnswers(params)
  },

  // post question for product (/questions)
  postQuestion(req, res) {
    // get date and add to req body
    insertQuestion(req.body)
      .then(result => handleResponse(res, null, 201))
      .catch(err => handleError(res, err));
  },

  // post ansewr for specific question (/questions/:question_id/answers)
  postAnswer(req, res) {
    let params = {
      ...req.body,
      ...req.params
    }
    insertAnswer(params)
      .then(result => handleResponse(res, null, 201))
      .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the question as helpful (/questions/:question_id/helpful)
  markQuestionHelpful(req, res) {
    updateQuestionHelpful(req.params.question_id)
      .then(result => handleResponse(res, null, 204))
      .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the question as reported (/questions/:question_id/report)
  reportQuestion(req, res) {
    updateReportQuestion(req.params.question_id)
      .then(result => handleResponse(res, null, 204))
      .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the answer as helpful (/questions/:answer_id/helpful)
  markAnswerHelpful(req, res) {
    updateAnswerHelpful(req.params.answer_id)
      .then(result => handleResponse(res, null, 204))
      .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the answer as reported (/questions/:answer_id/report)
  reportAnswer(req, res) {
    updateReportAnswer(req.params.answer_id)
      .then(result => handleResponse(res, null, 204))
      .catch(err => handleError(res, err));
  }
}