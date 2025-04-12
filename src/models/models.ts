import db from "../server/connection";

export async function fetchUsers() {
  try {
    console.log("Attempting to fetch users from database");
    const [rows] = await (await db).query("SELECT * FROM users");
    console.log(
      `Successfully fetched ${Array.isArray(rows) ? rows.length : 0} users`
    );
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw to handle in controller
  }
}

export async function fetchEvents() {
  try {
    console.log("Attempting to fetch events from database");
    const [rows] = await (await db).query("SELECT * FROM events");
    console.log(
      `Successfully fetched ${Array.isArray(rows) ? rows.length : 0} events`
    );
    return [rows];
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Re-throw to handle in controller
  }
}
