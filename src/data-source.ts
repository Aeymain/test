import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "minifb",
    synchronize: true,
    logging: true,
    entities: ["src/entity/**/*{.js,.ts}"],
    migrations: ["src/migrations/**/*{.js,.ts}"],
    subscribers: [],
})
