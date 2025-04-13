import db from "../server/connection";

const seed = async () => {
  await db.query(`DROP TABLE IF EXISTS events`);
  await db.query(`DROP TABLE IF EXISTS users`);

  await db.query(`
    CREATE TABLE users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(500) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);

  await db.query(`
    CREATE TABLE events (
      event_id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description TEXT,
      date DATETIME,
      location VARCHAR(255),
      created_by INT,
      invited INT,
      host_flaked TINYINT,
      invitee_flaked TINYINT,
      FOREIGN KEY (created_by) REFERENCES users(user_id),
      FOREIGN KEY (invited) REFERENCES users(user_id)
    );
  `);

  await db.query(`
    INSERT INTO users (username, email, password) 
    VALUES 
      ('sam', 'sam@legitemail.com', 'verySecurePassword'),
      ('deedee', 'deedee@legitemail.com', 'verySecurePassword4'),
      ('lee', 'lee@legitemail.com', 'verySecurePassword3'),
      ('steph', 'steph@legitemail.com', 'verySecurePassword4'),
      ('connor', 'connor@legitemail.com', 'verySecurePassword2')
  `);

  await db.query(`
    INSERT INTO events (title, description, date, location, created_by, invited, host_flaked, invitee_flaked)
    VALUES 
    ('Northcoders Graduation', 'drinks and snacks', '2025-04-11 18:00:00', 'Manchester', 1, 4, 0, 0 ),
    ('big sesh', 'zoots and scoots', '2025-04-11 18:00:00', 'London', 2, 3, 1, 0),
    ('Minecraft LAN party', 'blocks and doritos', '2025-04-11 18:00:00', 'Your house', 3, 4, 0, 1),
    ('small gig', 'ket and alcohol', '2025-04-11 18:00:00', 'a random basement somewhere', 2, 1, 1, 1)
  `);
};

export default seed;
