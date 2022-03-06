"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const Passwords_1 = __importDefault(require("./models/Passwords"));
const typeOrmConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "typeormtest",
    password: "password",
    database: "typeormtest",
    synchronize: true,
    logging: false,
    entities: [
        Passwords_1.default
    ]
};
exports.typeOrmConfig = typeOrmConfig;
