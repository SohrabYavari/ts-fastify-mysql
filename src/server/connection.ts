import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV || "dev";
dotenv.config({ path: path.resolve(__dirname, `../../.env.${ENV}`) });

let config: any;

if (ENV === "prod") {
  const jawsUrl = process.env.JAWSDB_URL;
  if (!jawsUrl) {
    throw new Error("JAWSDB_URL is not defined!");
  }

  const dbUrl = new URL(jawsUrl);
  config = {
    host: dbUrl.hostname,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1),
    port: Number(dbUrl.port),
  };
} else {
  if (!process.env.DB_DATABASE) {
    throw new Error("DB_DATABASE is not defined!");
  }

  config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
  };
}

// ✅ Now config is defined
console.log(`Connected to ${config.database} (${ENV})`);

const db = mysql.createPool(config);

export default db;
