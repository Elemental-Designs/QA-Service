const query = require('./qa-db');

module.exports = {
  readQuestions({ product_id, page, count }) {
    const text = `
      SELECT * FROM questions LIMIT 2
    `;
    const values = [product_id, page, count];
    console.log(values);

    return query(text);
  },
}