import Fastify from "fastify";
import { routes } from "../routes/routes";

const server = Fastify({ logger: true });

// Register Routes
server.register(routes);

export default server;
