import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV || "dev";

// Only load from dotenv file in development
if (ENV !== "prod") {
  dotenv.config({ path: path.resolve(__dirname, `../../.env.${ENV}`) });
}

let config: any;

// Always check for JAWSDB_URL first (Heroku-provided)
if (ENV === 'prod') {
  config = {
    databaseUrl: process.env.JAWSDB_URL,
  };
  console.log(`Connected to ${config.databaseUrl} via JAWSDB_URL (${ENV})`);
} else if (process.env.DB_DATABASE) {
  // Fallback to individual environment variables
  config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
  };
  console.log(`Connected to ${config.database} via individual config (${ENV})`);
} else {
  throw new Error("No database configuration found. Set JAWSDB_URL or individual DB_* variables.");
}

const db = mysql.createPool(config);

export default db;