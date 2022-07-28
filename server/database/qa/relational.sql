CREATE DATABASE qa;

USE qa;

CREATE TABLE product (
  id INT PRIMARY KEY,
  UNIQUE(id)
)

CREATE TABLE question (
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
)

CREATE TABLE answers (
  id INT PRIMARY KEY NOT NULL,
  question_id INT NOT NULL,
  body VARCHAR(255) NOT NULL,
  date_written DATE NOT NULL,
  answer_name VARCHAR(100) NOT NULL,
  answer_email VARCHAR(50) NOT NULL,
  reported BOOLEAN,
  helpful INT NOT NULL,
  CONSTRAINT fk_question
    FOREIGN KEY(question_id)
      REFERENCES question(id)
)

-- CREATE A TABLE OR JUST ADD IT TO ANSWERS TABLE
CREATE TABLE answers_photo (
  id INT PRIMARY KEY NOT NULL,
  answer_id INT NOT NULL,
  url VARCHAR(150),
  CONSTRAINT fk_answer
    FOREIGN KEY(answer_id)
      REFERENCES answer(id)
)