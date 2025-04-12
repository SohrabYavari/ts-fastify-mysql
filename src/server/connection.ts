import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV || "dev";
const envPath = path.resolve(__dirname, `../../.env.${ENV}`);
dotenv.config({ path: envPath });

let config: any = {};

if (ENV === "prod") {
  config = {
    connectionString: process.env.JAWSDB_URL,
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // port: process.env.DB_PORT,
    // database: process.env.DB_DATABASE,
  };
} else {
  config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}

const db = mysql.createConnection(config);

if (!process.env.DB_DATABASE && !process.env.JAWSDB_URL) {
  throw new Error("No Database & Database connection set!");
} else {
  console.log(`Connected to ${process.env.DB_DATABASE}`);
}

export default db;
