import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let db: mysql.Pool;

if (process.env.JAWSDB_URL) {
  // Use JawsDB on Heroku
  db = mysql.createPool(process.env.JAWSDB_URL);
} else {
  // Use local .env variables
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
}

export default db;
