const models = require('../models/qa.js');


module.exports = {
  // =====================================================
  // status below will always be 200 ok
  // =====================================================

  // get list of questions (/questions)
  getQuestions: (req,res) => {
    console.log('hello');
  },
  /*
    parameters:
    product_id(specifies whic product to get questions),
    page(select how many pages default 1),
    count(how many results per page default 5)
  */


  // get list of answers from specific question (:question_id/answers)
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
  /*
    body parameters:
    body: (text: question being asked)
    name: (text: name of qeustion asker)
    email: (text: emailadress for questions akser)
    product_id: (required for specific question)
  */

  // post ansewr for specific question (/questions/:question_id/answers)
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
  /*
    parameters:
    qeustions_id (requeired to update question)
  */

  // PUT/UPDATE mark the question as reported (/questions/:question_id/report)
  /*
    parameters:
    qeustions_id (requeired to update question)
  */

  // PUT/UPDATE mark the answer as helpful (/questions/:question_id/helpful)
  /*
    parameters:
    qeustions_id (requeired to update question)
  */

  // PUT/UPDATE mark the answer as reported (/questions/:question_id/report)
  /*
    parameters:
    qeustions_id (requeired to update question)
  */
}