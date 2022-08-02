const query = require('./qa-db');

module.exports = {

  readQuestions({ product_id, page, count }) {
    const text = `
      SELECT product_id,
      (
        json_agg
        (
          json_build_object
          (
            'id', q.id,
            'body', q.body,
            'date', (SELECT TO_CHAR(to_timestamp(q.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
            'asker_name', q.asker_name,
            'question_helpfulness', q.helpful,
            'reported', q.reported,
            'answers',
            (
              SELECT json_object_agg
              (
                id, json_build_object
                (
                  'id', a.id,
                  'body', a.body,
                  'date', (SELECT TO_CHAR(to_timestamp(a.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
                  'answerer', a.answer_name,
                  'helpfulness', a.helpful,
                  'photos',
                  (
                    SELECT coalesce
                    (
                      json_agg(ap.url),'[]'
                    )
                    FROM answers_photos AS ap
                    WHERE ap.answers_id = a.id
                  )
                )
              )
              FROM answers AS a
              WHERE a.questions_id = q.id
            )
          )
        )
      ) AS results
      FROM questions AS q
      WHERE q.product_id = $1
      GROUP BY 1
      OFFSET $2
      LIMIT $3
    `;
    const offset = Number(page) * Number(count) - count;
    const values = [product_id, offset, count];
    return query(text, values);
  },

  readAnswers({question_id, page, count}){
    console.log('read q')
    const text = `
      SELECT questions_id, $2 AS page, $3 AS count,
      (
        json_agg
        (
          json_build_object
          (
            'answer_id', a.id,
            'body', a.body,
            'date', (SELECT TO_CHAR(to_timestamp(a.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
            'answerer_name', a.answer_name,
            'helpfulness', a.helpful,
            'photos',
            (
              SELECT coalesce
              (
                json_agg
                (
                  json_build_object
                  (
                    'id', ap.id,
                    'url', ap.url
                  )
                ), '[]'
              )
              FROM answers_photos AS ap
              WHERE ap.answers_id = a.id
            )
          )
        )
      ) AS results
      FROM answers AS a
      WHERE a.questions_id = $1
      GROUP BY 1

    `;
    const offset = (parseInt(page) - 1) * parseInt(count);
    const values = [question_id, page, count,];
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


  insertAnswer({question_id, body, date,name, email, photos}) {
    const text =`
      INSERT INTO answers(question_id, body, date_written, answer_name, answer_email)
      RETURNING id
    `;
    const values = [question_id, body, /* get date */, name, email];
    const photoText = `INSERT INTO answers_photo(answers_id, url) VALUES ($1, $2)`
    return query(text, values)
      .then((id) => query(photoText, [photos]))
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