const { Pool } = require('pg')

const pool = new Pool ({
  user: 'jeromerodriguez',
  host: 'localhost',
  database: 'qa',
  password: 'psql',
});

module.exports = (text, values) => (
  pool.connect()
  .then(client => (
    client.query(text, values)
    .then(res => {
      client.release();
      return res;
    })
    .catch(err => {
      client.release();
      return Promise.reject(new Error(err));
    })
  ))
);