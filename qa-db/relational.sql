DROP TABLE questions, answers, answers_photos;

CREATE TABLE questions (
  id SERIAL UNIQUE PRIMARY KEY NOT NULL,
  product_id INTEGER NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written BIGINT NOT NULL,
  asker_name VARCHAR(100) NOT NULL,
  asker_email VARCHAR(50) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpful INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE answers (
  id SERIAL UNIQUE PRIMARY KEY NOT NULL,
  questions_id INTEGER NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written BIGINT NOT NULL,
  answer_name VARCHAR(100) NOT NULL,
  answer_email VARCHAR(50) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpful INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT fk_question
    FOREIGN KEY(questions_id)
      REFERENCES questions(id)
);

CREATE TABLE answers_photos (
  id SERIAL UNIQUE PRIMARY KEY NOT NULL,
  answers_id INTEGER NOT NULL,
  url VARCHAR(150),
  CONSTRAINT fk_answers
    FOREIGN KEY(answers_id)
      REFERENCES answers(id)
);

\COPY questions FROM 'qa_csv/questions.csv' DELIMITER ',' CSV HEADER;
\COPY answers FROM 'qa_csv/answers.csv' DELIMITER ',' CSV HEADER;
\COPY answers_photos FROM 'qa_csv/answers_photos.csv' DELIMITER ',' CSV HEADER;

-- RESETS COUNT FOR MAX ID WHEN INSERTING
SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions)+1);
SELECT setval('answers_id_seq', (SELECT MAX(id) FROM answers)+1);
SELECT setval('answers_photos_id_seq', (SELECT MAX(id) FROM answers_photos)+1);

-- INDICES FOR FK
CREATE INDEX idx_answers_questions_id ON answers(questions_id);
CREATE INDEX idx_answers_photos_answers_id ON answers_photos(answers_id);

-- INDICES FOR FILTERING
CREATE INDEX idx_questions_product_id ON questions(product_id);
CREATE INDEX idx_question_reported ON questions(reported);
CREATE INDEX idx_answers_reported ON answers(reported);
