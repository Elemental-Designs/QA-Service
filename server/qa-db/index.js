const { Pool, Client} = require ('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'qa',
  password: '',
  port: 3000
})