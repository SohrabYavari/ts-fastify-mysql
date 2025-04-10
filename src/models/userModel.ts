import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

export async function getAllUsersFromDb() {
  const [rows] = await pool.execute("SELECT * FROM users");
  return rows; 
}
