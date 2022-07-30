const query = require('../qa-db');

module.exports = {
  readQuestions({ product_id, page, count }) {
    const text = 'SELECT ';
    const values = [product_id, page, count];
    console.log(values);
    return query('SELECT * FROM questions LIMIT 2');
  },

}