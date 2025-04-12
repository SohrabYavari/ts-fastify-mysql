"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = fetchUsers;
exports.fetchEvents = fetchEvents;
const connection_1 = __importDefault(require("../server/connection"));
async function fetchUsers() {
    try {
        console.log("Attempting to fetch users from database");
        const [rows] = await (await connection_1.default).query("SELECT * FROM users");
        console.log(`Successfully fetched ${Array.isArray(rows) ? rows.length : 0} users`);
        return rows;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw to handle in controller
    }
}
async function fetchEvents() {
    try {
        console.log("Attempting to fetch events from database");
        const [rows] = await (await connection_1.default).query("SELECT * FROM events");
        console.log(`Successfully fetched ${Array.isArray(rows) ? rows.length : 0} events`);
        return rows;
    }
    catch (error) {
        console.error("Error fetching events:", error);
        throw error; // Re-throw to handle in controller
    }
}
