import db from "../server/connection";

export async function fetchUsers() {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw to handle in controller
  }
}

export async function fetchEvents() {
  try {
    const [rows] = await db.query("SELECT * FROM events");
    return rows;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Re-throw to handle in controller
  }
}


export async function inviteeFlaked() {
  try {
    const flaked = await db.query(`UPDATE events SET invitee_flaked = 1`)
    return flaked
  } catch (error) {
    console.error('Error patching event details')
  }
}


export async function hostFlaked() {
  try {
    const flaked = await db.query(`UPDATE events SET host_flaked = 1`)
    return flaked
  } catch (error) {
    console.error('Error patching event details')
  }
}

