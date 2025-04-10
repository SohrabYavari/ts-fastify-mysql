import db from '../server/connection'

export async function getAllUsersFromDb() {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows; 
}
