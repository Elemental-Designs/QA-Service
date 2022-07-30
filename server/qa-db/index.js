const { Pool, Client } = require('pg')

const client = new Client({
  user: 'jeromerodriguez',
  host: 'localhost',
  database: 'qa',
  password: 'psql',
});

client.connect();

module.exports = (text, values) => client.query(text, values);