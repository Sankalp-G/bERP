import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASS,
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
});

export default db;
