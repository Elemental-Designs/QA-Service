let qaRouter = require('express').Router();
let {
  getQuestions,

} = require('./controllers/qa.js');

// get list of questions (/questions)
qaRouter.get('/', getQuestions);

// get list of answers from specific question (:question_id/answers)
qaRouter.get('/:question_id/answers', )

// post question for product (/questions)
qaRouter.post('/', )

// post ansewr for specific question (/questions/:question_id/answers)
qaRouter.post('/:question_id/answers', )

// put the question as helpful (/questions/:question_id/helpful)
qaRouter.put('/:question_id/helpful')

// put the question as reported (/questions/:question_id/report)
qaRouter.put('/:question_id/report')

// put the answer as helpful (/questions/:answer_id/helpful)
qaRouter.put('/:answer_id/helpful')

// put the answer as reported (/questions/:answer_id/report)
qaRouter.put('/:answer_id/report')


module.exports = qaRouter;