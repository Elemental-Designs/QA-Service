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
    if (!req.query.product_id) handleError(res, 'invalid product_id')
    debugger;

    let params = {
      product_id: req.query.product_id,
      page: req.query.page || 1,
      count: req.query.count || 5,
    };

    readQuestions(params)
    .then(({rows})=> handleResponse(res, rows[0], 200))
    .catch(err => handleError(res, err));
  },

  // get list of answers from specific question (:question_id/answers)
  getAnswers(req, res) {
    if (!req.params.question_id) handleError(res, 'invalid question_id')

    let params = {
      question_id: req.params.question_id,
      page: req.query.page || 1,
      count: req.query.count || 5
    }

    readAnswers(params)
    .then(({rows}) => {
      if (!rows[0]) rows[0] = {}
      handleResponse(res, rows[0], 200)
    })
    .catch(err => handleError(res, err));
  },

  // post question for product (/questions)
  postQuestion(req, res) {
    if (!req.body.product_id) handleError(res, 'invalid product_id')

    let params = {
      ...req.body,
      date: Date.now()
    }

    insertQuestion(params)
    .then(results => handleResponse(res, null, 201))
    .catch(err => handleError(res, err));
  },

  // post ansewr for specific question (/questions/:question_id/answers)
  postAnswer(req, res) {
    if (!req.params.question_id) handleError(res, 'invalid question_id')

    let params = {
      ...req.body,
      question_id: req.params.question_id,
      date: Date.now()
    }

    insertAnswer(params)
    .then(results => handleResponse(res, null, 201))
    .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the question as helpful (/questions/:question_id/helpful)
  markQuestionHelpful(req, res) {
    if (!req.params.question_id) handleError(res, 'invalid question_id')

    updateQuestionHelpful(req.params.question_id)
    .then(handleResponse(res, null, 204))
    .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the question as reported (/questions/:question_id/report)
  reportQuestion(req, res) {
    if (!req.params.question_id) handleError(res, 'invalid question_id')

    updateReportQuestion(req.params.question_id)
    .then(handleResponse(res, null, 204))
    .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the answer as helpful (/questions/:answer_id/helpful)
  markAnswerHelpful(req, res) {
    if (!req.params.answer_id) handleError(res, 'invalid answer_id')

    updateAnswerHelpful(req.params.answer_id)
    .then(handleResponse(res, null, 204))
    .catch(err => handleError(res, err));
  },

  // PUT/UPDATE mark the answer as reported (/questions/:answer_id/report)
  reportAnswer(req, res) {
    if (!req.params.answer_id) handleError(res, 'invalid answer_id');

    updateReportAnswer(req.params.answer_id)
    .then(handleResponse(res, null, 204))
    .catch(err => handleError(res, err));
  }
}