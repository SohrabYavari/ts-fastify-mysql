// In your routes file
import { FastifyInstance } from "fastify";
import { getAllUsers, getAllEvents } from "../controllers/controllers";

export default function registerRoutes(fastify: FastifyInstance) {
  fastify.get("/api/users", getAllUsers);
  fastify.get("/api/events", getAllEvents);
  
  // Test route to check if the server is running
  fastify.get("/ping", async (request, reply) => {
    return { status: "ok" };
  });
}