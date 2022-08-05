const query = require('../qa-db');

module.exports = {

  /* terminal query
  SELECT product_id, (coalesce(json_agg(json_build_object(
    'id', q.id,
    'body', q.body,
    'date', (SELECT TO_CHAR(to_timestamp(q.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
    'asker_name', q.asker_name,
    'question_helpfulness', q.helpful,
    'reported', q.reported,
    'answers',(
      coalesce((SELECT json_object_agg(
            id, json_build_object(
              'id', a.id,
              'body', a.body,
              'date', (SELECT TO_CHAR(to_timestamp(a.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
              'answerer', a.answer_name,
              'helpfulness', a.helpful,
              'photos',(
                SELECT coalesce(json_agg(ap.url),'[]')
                FROM answers_photos AS ap
                WHERE ap.answers_id = a.id)))
          FROM answers AS a
          WHERE a.questions_id = q.id)
        ,'{}'))))
    ,'[]' )) AS results
  FROM questions AS q
  WHERE q.product_id = 1
  AND q.reported = false
  GROUP BY 1
  OFFSET 0
  LIMIT 5
  */
  readQuestions({ product_id, page, count }) {
    const text = `
    SELECT product_id,
      (
      coalesce(
        json_agg(
          json_build_object(
            'id', q.id,
            'body', q.body,
            'date', (SELECT TO_CHAR(to_timestamp(q.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
            'asker_name', q.asker_name,
            'question_helpfulness', q.helpful,
            'reported', q.reported,
            'answers',(
              coalesce(
                (
                  SELECT json_object_agg(
                    id, json_build_object(
                      'id', a.id,
                      'body', a.body,
                      'date', (SELECT TO_CHAR(to_timestamp(a.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
                      'answerer', a.answer_name,
                      'helpfulness', a.helpful,
                      'photos',(
                        SELECT coalesce(json_agg(ap.url),'[]')
                        FROM answers_photos AS ap
                        WHERE ap.answers_id = a.id
                      )
                    )
                  )
                  FROM answers AS a
                  WHERE a.questions_id = q.id
                  AND a.reported = false
                )
                ,'{}'
              )
            )
          )
        )
        ,'[]'
      )
    ) AS results
    FROM questions AS q
    WHERE q.product_id = $1
    AND q.reported = false
    GROUP BY 1
    OFFSET $2
    LIMIT $3
    `;
    const offset = (Number(page) - 1) * Number(count);
    const values = [product_id, offset, count];
    return query(text, values);
  },

  /* terminal query
    SELECT questions_id, 0 AS page, 5 AS count,
      (coalesce(json_agg(
        json_build_object (
          'answer_id', a.id,
          'body', a.body,
          'date', (SELECT TO_CHAR(to_timestamp(a.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
          'answerer_name', a.answer_name,
          'helpfulness', a.helpful,
          'photos', (SELECT coalesce
            (json_agg (
                json_build_object (
                  'id', ap.id,
                  'url', ap.url
                )
              ), '[]')
            FROM answers_photos AS ap
            WHERE ap.answers_id = a.id
          )
        )
        ) , '[]')
    ) AS results
    FROM answers AS a
    WHERE a.questions_id = 1
    GROUP BY 1
  */

  readAnswers({ question_id, page, count }){
    const text = `
      SELECT questions_id, $2 AS page, $3 AS count,
      (
        coalesce (
          json_agg(
            json_build_object (
              'answer_id', a.id,
              'body', a.body,
              'date', (SELECT TO_CHAR(to_timestamp(a.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS:000"Z"')),
              'answerer_name', a.answer_name,
              'helpfulness', a.helpful,
              'photos', (
                SELECT coalesce (
                  json_agg (
                    json_build_object (
                      'id', ap.id,
                      'url', ap.url
                    )
                  ), '[]'
                )
                FROM answers_photos AS ap
                WHERE ap.answers_id = a.id
              )
            )
          ) , '[]'
        )
      ) AS results
      FROM answers AS a
      WHERE a.questions_id = $1
      GROUP BY 1
    `;
    const offset = (Number(page) - 1) * Number(count);
    const values = [question_id, offset, count];
    return query(text, values);
  },

  /*
  INSERT INTO questions(body, date_written, asker_name, asker_email)
  VALUES('test questions', 234234514, 'test question name', 'testdmail@email.com')
  */
  insertQuestion({ product_id, body, date, name, email }) {
    const text =`
      INSERT INTO questions(product_id, body, date_written, asker_name, asker_email)
      VALUES($1, $2, $3, $4, $5)
    `;
    const values = [product_id, body, date, name, email];
    return query(text, values);
  },


  /*
  INSERT INTO answers(id, questions_id, body, date_written, answer_name, answer_email)
      VALUES((SELECT max(id + 1) from answers), 1, 'insert answer', 123412341, 'insert name', 'insert@email.com');
  INSERT INTO answers_photos(id, answers_id, url)
      VALUES ((SELECT max(id + 1) FROM answers_photos), (SELECT max(id) FROM answers), 'PICTURE URL');
  */

  insertAnswer({ question_id, body, date, name, email, photos }) {
    const text =`
      INSERT INTO answers(questions_id, body, date_written, answer_name, answer_email)
      VALUES($1, $2, $3, $4, $5)
      RETURNING id
    `;
    const values = [question_id, body, date, name, email];
    const photoText = `
      INSERT INTO answers_photos(answers_id, url)
      VALUES ($1, $2)
    `;
    return query(text, values)
      .then(({rows}) => {
        if (photos.length > 0) {
          for (let i = 0; i < photos.length; i++) {
            console.log(photos[i]);
            query(photoText, [rows[0].id, photos[i]]);
          }
        }
      });
  },

  updateQuestionHelpful(id) {
    const text ='UPDATE questions SET helpful = helpful + 1 WHERE id = $1';
    return query(text, [id]);
  },

  updateReportQuestion(id) {
    const text ='UPDATE questions SET reported = true WHERE id = $1';
    return query(text, [id]);
  },

  updateAnswerHelpful(id) {
    const text ='UPDATE answers SET helpful = helpful + 1 WHERE id = $1';
    return query(text, [id]);
  },

  updateReportAnswer(id) {
    const text ='UPDATE answers SET reported = true WHERE id = $1';
    return query(text, [id]);
  }
};