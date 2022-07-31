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
    const text =`
    UPDATE questions SET helpful = helpful + 1 WHERE id = $1
    `;
    const values = [id];
    return query(text, values);
  },
  updateReportQuestion(id) {
    const text =`
      UPDATE questions SET reported = true WHERE id = $1
    `;
    const values = [id];
    return query(text, values);
  },
  updateAnswerHelpful(id) {
    const text =`
      UPDATE answers SET helpful = helpful + 1 WHERE id = $1
    `;
    const values = [id];
    return query(text, values);
  },
  updateReportAnswer(id) {
    const text =`
      UPDATE answers SET reported = true WHERE id = $1
    `;
    const values = [id];
    return query(text, values);
  }
}