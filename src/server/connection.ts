import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load the appropriate .env file based on the environment
try {
  if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.prod" });
  } else {
    dotenv.config(); // Default to .env for development or other environments
  }
} catch (error) {
  console.error("Error loading environment variables:", error);
  process.exit(1); // Exit the app if the environment variables can't be loaded
}

let db: mysql.Pool;

// Set up the database connection based on the environment
try {
  if (process.env.JAWSDB_URL) {
    // Use JawsDB on Heroku
    db = mysql.createPool(process.env.JAWSDB_URL);
  } else if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_DATABASE) {
    // Use local .env variables if available
    db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
  } else {
    throw new Error("Database configuration is missing in environment variables.");
  }
} catch (error) {
  console.error("Error setting up the database connection:", error);
  process.exit(1); // Exit the app if the database connection can't be established
}

export default db;
