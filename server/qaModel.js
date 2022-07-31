const query = require('./qa-db');

module.exports = {
  readQuestions({ product_id, page, count }) {
    const text = `
      SELECT * FROM questions WHERE reported = false LIMIT 2
    `;
    const values = [product_id, page, count];
    console.log(values);``

    return query(text);
  },
  readAnswers(){

  },
  insertQuestion() {

  },
  insertAnswer() {

  },
  updateQuestionHelpful(id) {

  },
  updateReportQuestion(id) {

  },
  updateAnswerHelpful(id) {

  },
  updateReportAnswer(id) {

  }
}