import db from "../server/connection";

export async function fetchUsers() {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
}

export async function fetchEvents() {
  const [rows] = await db.execute("SELECT * FROM events");
  return rows;
}

