import { FastifyReply, FastifyRequest } from "fastify";
import { fetchUsers, fetchEvents } from "../models/models";

export async function getAllUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    console.log("Starting getAllUsers controller");
    const users = await fetchUsers();

    if (!users || (Array.isArray(users) && users.length === 0)) {
      console.log("No users found");
      return reply.status(404).send({ message: "No users found" });
    }

    console.log("Successfully returning users");
    return reply.send({users});
  } catch (err) {
    console.error("Error in getAllUsers controller:", err);
    return reply.status(500).send({ 
      message: "Internal Server Error", 
      details: process.env.NODE_ENV === "production" ? undefined : (err as Error).message 
    });
  }
}

export async function getAllEvents(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    console.log("Starting getAllEvents controller");
    const events = await fetchEvents();

    if (!events || (Array.isArray(events) && events.length === 0)) {
      console.log("No events found");
      return reply.status(404).send({ message: "No events found" });
    }

    console.log("Successfully returning events");
    return reply.send({events});
  } catch (err) {
    console.error("Error in getAllEvents controller:", err);
    return reply.status(500).send({ 
      message: "Internal Server Error", 
      details: process.env.NODE_ENV === "production" ? undefined : (err as Error).message 
    });
  }
}