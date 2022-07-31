const {
  readQuestions
} = require('./qaModel.js');

const handleResponse = (res, data, code) => res.status(code).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = {
  // =====================================================
  // status below will always be 200 ok
  // =====================================================

  // get list of questions (/questions)
  /*
    parameters:
    product_id(specifies whic product to get questions),
    page(select how many pages default 1),
    count(how many results per page default 5)
  */
  getQuestions(req, res) {
    let params = {
      product_id: req.params.product_id || 1,
      page: req.params.page || 1,
      count: req.params.count || 5,
    }

    readQuestions(params)
    .then(results => handleResponse(res, results.rows, 200))
    .catch(err => handleError(res, err));
  },


  // get list of answers from specific question (:question_id/answers)
  getAnswers(req, res) {

  },
  /*
    parameters:
    question_id
    q parameters:
    page(select how many pages default 1),
    count(how many results per page default 5)
  */


  // =====================================================
  // status below will always be 201 created
  // =====================================================


  // post question for product (/questions)
  postQuestion(req, res) {

  },
  /*
    body parameters:
    body: (text: question being asked)
    name: (text: name of qeustion asker)
    email: (text: emailadress for questions akser)
    product_id: (required for specific question)
  */

  // post ansewr for specific question (/questions/:question_id/answers)
  postAnswer(req, res) {

  },
  /*
    parameters:
    question_id
    body parameters:
    page(select how many pages default 1),
    count(how many results per page default 5)
  */




  // =====================================================
  // status below will always be 204 no content
  // =====================================================


  // PUT/UPDATE mark the question as helpful (/questions/:question_id/helpful)
  markQuestionHelpful(req, res) {

  },
  /*
    parameters:
    qeustions_id (requeired to update question)
  */

  // PUT/UPDATE mark the question as reported (/questions/:question_id/report)
  reportQuestion(req, res) {

  },
  /*
    parameters:
    qeustions_id (requeired to update question)
  */

  // PUT/UPDATE mark the answer as helpful (/questions/:answer_id/helpful)
  markAnswerHelpful(req, res) {

  },
  /*
    parameters:
    qeustions_id (requeired to update question)
  */

  // PUT/UPDATE mark the answer as reported (/questions/:answer_id/report)
  reportAnswer(req, res) {

  }
  /*
    parameters:
    qeustions_id (requeired to update question)
  */
}