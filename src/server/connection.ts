import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";
import { URL } from "url";

const ENV = process.env.NODE_ENV || "dev";
const envPath = path.resolve(__dirname, `../../.env.${ENV}`);
dotenv.config({ path: envPath });

let config: any = {};

if (ENV === "prod" && process.env.JAWSDB_URL) {
  const dbUrl = new URL(process.env.JAWSDB_URL);
  config = {
    host: dbUrl.hostname,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.replace("/", ""),
    port: Number(dbUrl.port),
  };
} else {
  config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}

const db = mysql.createPool(config);

if (!process.env.DB_DATABASE && !process.env.JAWSDB_URL) {
  throw new Error("No Database & Database connection set!");
} else {
  console.log(`Connected to ${process.env.DB_DATABASE}`);
}

export default db;
