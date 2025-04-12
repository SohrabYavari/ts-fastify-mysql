"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const ENV = process.env.NODE_ENV || "dev";
// Only load from dotenv file in development
if (ENV !== "prod") {
    dotenv_1.default.config({ path: path_1.default.resolve(__dirname, `../../.env.${ENV}`) });
}
let config;
// Always check for JAWSDB_URL first (Heroku-provided)
if (ENV === 'prod') {
    config = {
        databaseUrl: process.env.JAWSDB_URL,
    };
    console.log(`Connected to ${config.databaseUrl} via JAWSDB_URL (${ENV})`);
}
else if (process.env.DB_DATABASE) {
    // Fallback to individual environment variables
    config = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: Number(process.env.DB_PORT),
    };
    console.log(`Connected to ${config.database} via individual config (${ENV})`);
}
else {
    throw new Error("No database configuration found. Set JAWSDB_URL or individual DB_* variables.");
}
const db = promise_1.default.createPool(config);
exports.default = db;
