"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("../routes/routes"));
const server = (0, fastify_1.default)({ logger: true });
// Register Routes
server.register(routes_1.default);
exports.default = server;
