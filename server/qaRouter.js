const qaRouter = require('express').Router();
const {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer
} = require('./qaController.js');

// get list of questions (/questions)
qaRouter.get('/', getQuestions);

// get list of answers from specific question (:question_id/answers)
qaRouter.get('/:question_id/answers', getAnswers);

// post question for product (/questions)
qaRouter.post('/', postQuestion);

// post ansewr for specific question (/questions/:question_id/answers)
qaRouter.post('/:question_id/answers', postAnswer);

// put the question as helpful (/questions/:question_id/helpful)
qaRouter.put('/:question_id/helpful', markQuestionHelpful);

// put the question as reported (/questions/:question_id/report)
qaRouter.put('/:question_id/report', reportQuestion);

// put the answer as helpful (/questions/:answer_id/helpful)
qaRouter.put('/answers/:answer_id/helpful', markAnswerHelpful);

// put the answer as reported (/questions/:answer_id/report)
qaRouter.put('/answers/:answer_id/report', reportAnswer);

module.exports = qaRouter;