import "reflect-metadata";
import { DataSource } from "typeorm";

import { CombineScore } from "./entity/CombineScore";
import { Pick } from "./entity/Pick";
import { Player } from "./entity/Player";
import { Schedule } from "./entity/Schedule";
import { Team } from "./entity/Team";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Password2023!",
  database: "MyNFL",
  synchronize: false,
  logging: true,
  entities: ["src/entity/*.ts"],
  migrations: [],
  subscribers: [],
});
