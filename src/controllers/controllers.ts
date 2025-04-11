import { FastifyReply, FastifyRequest } from "fastify";
import { fetchUsers, fetchEvents } from "../models/models";

export async function getAllUsers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const users = await fetchUsers();

    if (!users) {
      return reply.status(404).send({ message: "No users found" });
    }

    return reply.send({users});
  } catch (err) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}


export async function getAllEvents(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const events = await fetchEvents();

    if (!events) {
      return reply.status(404).send({ message: "No events found" });
    }

    return reply.send({events});
  } catch (err) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}
