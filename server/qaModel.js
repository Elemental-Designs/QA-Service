const query = require('./qa-db');

module.exports = {

  readQuestions({ product_id, page, count }) {
    console.log('read')
    const text = `
      SELECT product_id,
      (
        SELECT JSON_AGG
        (
          JSON_BUILD_OBJECT
          (
            'id', q.id,
            'body', q.body,
            'asker_name', q.asker_name,
            'question_helpfulness', q.helpful,
            'reported', q.reported
          )
        )
        FROM questions AS q WHERE q.product_id = $1
      ) AS results
      FROM questions
      WHERE questions.product_id = $1
    `;
    const values = [product_id];

    return query(text, values);
  },


  readAnswers({question_id, page, count}){
    const text = `
      SELECT * FROM answers WHERE reported = false LIMIT 2
    `;
    const values = [product_id, page, count];

    return query(text, values);
  },


  insertQuestion({product_id, body, name, email}) {
    const text =`
      INSERT INTO questions(product_id, body, date_written, asker_name, asker_email)
      VALUES($1, $2, $3, $4, $5)
    `;
    const values = [product_id, body, /* get date */, name, email];
    return query(text, values);
  },


  insertAnswer() {
    const text =`
      INSERT INTO answers(question_id, body, date_written, answer_name, answer_email)
    `;
    const values = [id];
    return query(text, values);
  },


  updateQuestionHelpful(id) {
    const text =`UPDATE questions SET helpful = helpful + 1 WHERE id = $1`;
    const values = [id];
    return query(text, values);
  },


  updateReportQuestion(id) {
    const text =`UPDATE questions SET reported = true WHERE id = $1`;
    const values = [id];
    return query(text, values);
  },


  updateAnswerHelpful(id) {
    const text =`UPDATE answers SET helpful = helpful + 1 WHERE id = $1`;
    const values = [id];
    return query(text, values);
  },


  updateReportAnswer(id) {
    const text =`UPDATE answers SET reported = true WHERE id = $1`;
    const values = [id];
    return query(text, values);
  }
}