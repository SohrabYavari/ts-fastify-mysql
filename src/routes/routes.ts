// In your routes file
import { FastifyInstance } from "fastify";
import {
  getAllUsers,
  getAllEvents,
  markInviteeFlaked,
  markHostFlaked,
  getEvent,
} from "../controllers/controllers";

export default function registerRoutes(fastify: FastifyInstance) {
  fastify.get("/api/users", getAllUsers);
  fastify.get("/api/events", getAllEvents);
  fastify.get("/api/events/:eventId", getEvent);
  fastify.patch("/api/events/:eventId", markInviteeFlaked || markHostFlaked);
}
