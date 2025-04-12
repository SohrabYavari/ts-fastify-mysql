"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../server/connection"));
const seed = async () => {
    await connection_1.default.query(`DROP TABLE IF EXISTS events`);
    await connection_1.default.query(`DROP TABLE IF EXISTS users`);
    await connection_1.default.query(`
    CREATE TABLE users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(500) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
    await connection_1.default.query(`
    CREATE TABLE events (
      event_id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description TEXT,
      date DATETIME,
      location VARCHAR(255),
      created_by INT,
      invited INT,
      FOREIGN KEY (created_by) REFERENCES users(user_id),
      FOREIGN KEY (invited) REFERENCES users(user_id)
    );
  `);
    await connection_1.default.query(`
    INSERT INTO users (username, email, password) 
    VALUES 
      ('sam', 'sam@legitemail.com', 'verySecurePassword'),
      ('deedee', 'deedee@legitemail.com', 'verySecurePassword4'),
      ('lee', 'lee@legitemail.com', 'verySecurePassword3'),
      ('steph', 'steph@legitemail.com', 'verySecurePassword4'),
      ('connor', 'connor@legitemail.com', 'verySecurePassword2')
  `);
    await connection_1.default.query(`
    INSERT INTO events (title, description, date, location, created_by, invited)
    VALUES (
      'Northcoders Graduation',
      'drinks and snacks',
      '2025-04-11 18:00:00',
      'Manchester',
      1,
      4
    )
  `);
};
exports.default = seed;
