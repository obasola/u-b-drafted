import dotenv from "dotenv";
import express, {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import { scheduleRouter } from "./modules/schedule/schedule.router";
import { teamRouter } from "./modules/team/team.router";
import { pickRouter } from "./modules/pick/pick.router";
import { playerRouter } from "./modules/player/player.router";
import { combineRouter } from "./modules/combinescore/combine.router";

import cors from "cors";
import bodyParser from 'body-parser';

dotenv.config();

if(!process.env.PORT) {
    process.exit(1);
}

const app = express();
const PORT: number = parseInt(process.env.PORT, 10);
app.use(bodyParser.json());

const prisma = new PrismaClient();
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));
console.log("Registering endpoints now...");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
})
// Combine
app.post("/combine", combineRouter);
app.get("/combines/", combineRouter);
app.get("/combine/:id", combineRouter);
app.put("/combine/:id", combineRouter);
app.delete("/combine/:id", combineRouter);
// Pick
app.post("/pick", pickRouter);
app.get("/picks", pickRouter);
app.get("/pick/:id", pickRouter);
app.put("/pick/:id", pickRouter);
app.delete("/pick/:id", pickRouter);
// Player
app.post("/player", playerRouter);
app.get("/players", playerRouter);
app.get("/player/:id", playerRouter);
app.put("/player/:id", playerRouter);
app.delete("/player/:id", playerRouter);
// Player Awards
app.post("/schedule", scheduleRouter);
app.get("/schedules/", scheduleRouter);
app.get("/schedule/:id", scheduleRouter);
app.put("/schedule/:id", scheduleRouter);
app.delete("/schedule/:id", scheduleRouter);
// Schedule
app.post("/schedule", scheduleRouter);
app.get("/schedules/", scheduleRouter);
app.get("/schedule/:id", scheduleRouter);
app.put("/schedule/:id", scheduleRouter);
app.delete("/schedule/:id", scheduleRouter);
// Team
app.post("/team", teamRouter);
app.get("/teams/", teamRouter);
app.get("/team/names", teamRouter);
app.get("/team/:id", teamRouter);
app.put("/team/:id", teamRouter);
app.delete("/team/:id", teamRouter);
// Post-Season Results
app.post("/schedule", scheduleRouter);
app.get("/schedules/", scheduleRouter);
app.get("/schedule/:id", scheduleRouter);
app.put("/schedule/:id", scheduleRouter);
app.delete("/schedule/:id", scheduleRouter);
// User
app.post("/schedule", scheduleRouter);
app.get("/schedules/", scheduleRouter);
app.get("/schedule/:id", scheduleRouter);
app.put("/schedule/:id", scheduleRouter);
app.delete("/schedule/:id", scheduleRouter);
// Start Server
app.listen(PORT, () => {
    console.log(`Server started successfully on port: ${PORT}`)
});