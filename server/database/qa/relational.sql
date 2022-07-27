CREATE DATABASE qa;

USE qa;

CREATE TABLE product (
  id INT PRIMARY KEY,
  UNIQUE(id)
)

CREATE TABLE question (
  id INT PRIMARY KEY,
  product_id INT NOT NULL,
  question_body VARCHAR(255) NOT NULL,
  question_date DATE NOT NULL,
  asker_email VARCHAR(50) NOT NULL,
  asker_name VARCHAR(100) NOT NULL,
  question_helpfulness INT NOT NULL,
  question_reported BOOLEAN,
  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES product(id)
)
