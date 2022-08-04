DROP TABLE product, questions, answers, answers_photos;

-- CREATE TABLE temp (
--   id INTEGER PRIMARY KEY,
--   name VARCHAR(100),
--   slogan VARCHAR(255),
--   description TEXT,
--   category VARCHAR(50),
--   default_price INTEGER,
--   UNIQUE(id)
-- );

-- CREATE TABLE product (
--   id SERIAL UNIQUE PRIMARY KEY,
--   name VARCHAR(100),
--   UNIQUE(id)
-- );

CREATE TABLE questions (
  id SERIAL UNIQUE PRIMARY KEY NOT NULL,
  product_id INTEGER NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written BIGINT NOT NULL,
  asker_name VARCHAR(100) NOT NULL,
  asker_email VARCHAR(50) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  helpful INTEGER NOT NULL DEFAULT 0
  -- CONSTRAINT fk_product
  --   FOREIGN KEY(product_id)
  --     REFERENCES product(id)
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

-- \COPY temp FROM 'qa_csv/product.csv' DELIMITER ',' CSV HEADER;

-- INSERT INTO product(id, name)
-- SELECT id, name
-- FROM temp;

-- DROP TABLE temp;

\COPY questions FROM 'qa_csv/questions.csv' DELIMITER ',' CSV HEADER;
\COPY answers FROM 'qa_csv/answers.csv' DELIMITER ',' CSV HEADER;
\COPY answers_photos FROM 'qa_csv/answers_photos.csv' DELIMITER ',' CSV HEADER;