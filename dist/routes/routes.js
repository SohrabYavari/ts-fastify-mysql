"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerRoutes;
const controllers_1 = require("../controllers/controllers");
function registerRoutes(fastify) {
    fastify.get("/api/users", controllers_1.getAllUsers);
    fastify.get("/api/events", controllers_1.getAllEvents);
    // Test route to check if the server is running
    fastify.get("/ping", async (request, reply) => {
        return { status: "ok" };
    });
}
