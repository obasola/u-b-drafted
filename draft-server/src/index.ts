import dotenv from "dotenv";
import express, {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import { scheduleRouter } from "./modules/schedule/schedule.router";
import { teamRouter } from "./modules/team/team.router";


import cors from "cors";

dotenv.config();

if(!process.env.PORT) {
    process.exit(1);
}

const app = express();
const PORT: number = parseInt(process.env.PORT, 10);


const prisma = new PrismaClient();
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));
console.log("Registering endpoints now...");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
})
// Schedule
app.post("/schedule/new", scheduleRouter);
app.get("/schedules/", scheduleRouter);
app.get("/schedule/:id", scheduleRouter);
app.put("/schedule/:id", scheduleRouter);
app.delete("/schedule/:id", scheduleRouter);
// Team
app.post("/team/new", teamRouter);
app.get("/teams/", teamRouter);
app.get("/team/names", teamRouter);
app.get("/team/:id", teamRouter);
app.put("/team/:id", teamRouter);
app.delete("/team/:id", teamRouter);
app.listen(PORT, () => {
    console.log(`Server started successfully on port: ${PORT}`)
});