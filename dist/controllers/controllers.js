"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getAllEvents = getAllEvents;
const models_1 = require("../models/models");
async function getAllUsers(request, reply) {
    try {
        const users = await (0, models_1.fetchUsers)();
        if (!users) {
            return reply.status(404).send({ message: "No users found" });
        }
        return reply.send({ users });
    }
    catch (err) {
        return reply.status(500).send({ message: "Internal Server Error" });
    }
}
async function getAllEvents(request, reply) {
    try {
        const events = await (0, models_1.fetchEvents)();
        if (!events) {
            return reply.status(404).send({ message: "No events found" });
        }
        return reply.send({ events });
    }
    catch (err) {
        return reply.status(500).send({ message: "Internal Server Error" });
    }
}
