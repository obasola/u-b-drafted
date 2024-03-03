import dotenv from "dotenv";
import express, {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
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

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
})
app.get("/teams/", teamRouter);
app.get("/team/names", teamRouter);
app.listen(PORT, () => {
    console.log(`Server started successfully on port: ${PORT}`)
});