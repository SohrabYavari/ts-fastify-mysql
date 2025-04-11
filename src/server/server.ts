import Fastify from "fastify";
import registerRoutes from "../routes/routes";

const server = Fastify({ logger: true });

// Register Routes
server.register(registerRoutes);

export default server;
