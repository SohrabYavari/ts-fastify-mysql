import Fastify from "fastify";
import registerRoutes from "../routes/routes";
import cors from "@fastify/cors";

const server = Fastify({ logger: true });

server.register(cors, {
  origin: true,
});

// Register Routes
server.register(registerRoutes);

export default server;
