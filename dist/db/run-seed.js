"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import data from './data/index'
const seed_1 = __importDefault(require("./seed"));
const connection_1 = __importDefault(require("../server/connection"));
const runSeed = async () => {
    await (0, seed_1.default)();
    return (await connection_1.default).end();
};
runSeed();
