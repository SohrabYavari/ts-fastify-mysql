import { FastifyReply, FastifyRequest } from "fastify";
import { fetchUsers, fetchEvents, inviteeFlaked, hostFlaked, fetchSpecificEvent } from "../models/models";

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


interface EventParams {
  eventId: number;
}

export async function getEvent(
  request: FastifyRequest<{ Params: EventParams }>,
  reply: FastifyReply
) {
  const { eventId } = request.params;
  const event = await fetchSpecificEvent(eventId);
  return reply.send({event});
}

export async function markInviteeFlaked(
  request: FastifyRequest<{ Params: EventParams }>,
  reply: FastifyReply
) {
  const { eventId } = request.params;
  const result = await inviteeFlaked(eventId);
  return reply.code(200).send({ success: true, data: result });
}

export async function markHostFlaked(
  request: FastifyRequest<{ Params: EventParams }>,
  reply: FastifyReply
) {
  const { eventId } = request.params;
  const result = await hostFlaked(eventId);
  return reply.code(200).send({ success: true, data: result });
}