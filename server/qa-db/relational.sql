CREATE TABLE product (
  id INT PRIMARY KEY,
  UNIQUE(id)
);

CREATE TABLE questions (
  id INT PRIMARY KEY NOT NULL,
  product_id INT NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written DATE NOT NULL,
  asker_name VARCHAR(100) NOT NULL,
  asker_email VARCHAR(50) NOT NULL,
  question BOOLEAN,
  helpful INT NOT NULL,
  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES product(id)
);

CREATE TABLE answers (
  id INT PRIMARY KEY NOT NULL,
  questions_id INT NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written DATE NOT NULL,
  answer_name VARCHAR(100) NOT NULL,
  answer_email VARCHAR(50) NOT NULL,
  reported BOOLEAN,
  helpful INT NOT NULL,
  CONSTRAINT fk_question
    FOREIGN KEY(questions_id)
      REFERENCES questions(id)
);

CREATE TABLE answers_photo (
  id INT PRIMARY KEY NOT NULL,
  answers_id INT NOT NULL,
  url VARCHAR(150),
  CONSTRAINT fk_answers
    FOREIGN KEY(answers_id)
      REFERENCES answers(id)
);