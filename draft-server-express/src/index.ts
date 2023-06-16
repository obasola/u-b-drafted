import { AppDataSource } from "./data-source";

import { Request, Response } from "express";
import { Team } from "./entity/Team";
import { Schedule } from "./entity/Schedule";
import { Player } from "./entity/Player";
import { Pick } from "./entity/Pick";
import { CombineScore } from "./entity/CombineScore";

const dotenv = require("dotenv");
const express = require("express");

AppDataSource.initialize()
    .then(async () => {
        console.log("Loading teams from the database...");
        const teams = await AppDataSource.manager.find(Team);
        console.log("Loaded teams count: ", teams.length);

        console.log(
            "Here you can setup and run express / fastify / any other framework."
        );
    })
    .catch((error) => console.log(error));

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.APP_SERVER_PORT;

// create and setup express app
const app = express();

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.render("index");
});

// register TEAM routes
app.get("/combine_scores", async function (req: Request, res: Response) {
    const combineScores = await AppDataSource.getRepository(
        CombineScore
    ).find();
    res.json(combineScores);
});

app.get("/combine_score/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(CombineScore).findOneBy({
        id: parseInt(req.params.id),
    });
    return res.send(results);
});

app.post("/combine_score", async function (req: Request, res: Response) {
    const combineScore = await AppDataSource.getRepository(CombineScore).create(
        req.body
    );
    const results = await AppDataSource.getRepository(CombineScore).save(
        combineScore
    );
    return res.send(results);
});

app.put("/combine_score/:id", async function (req: Request, res: Response) {
    const combineScore = await AppDataSource.getRepository(
        CombineScore
    ).findOneBy({
        id: parseInt(req.params.id),
    });
    AppDataSource.getRepository(CombineScore).merge(combineScore, req.body);
    const results = await AppDataSource.getRepository(CombineScore).save(
        combineScore
    );
    return res.send(results);
});

app.delete("/combine_score/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(CombineScore).delete(
        req.params.id
    );
    return res.send(results);
});

// register TEAM routes
app.get("/picks", async function (req: Request, res: Response) {
    const picks = await AppDataSource.getRepository(Pick).find();
    res.json(picks);
});

app.get("/pick/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Pick).findOneBy({
        id: parseInt(req.params.id),
    });
    return res.send(results);
});

app.post("/pick", async function (req: Request, res: Response) {
    const pick = await AppDataSource.getRepository(Pick).create(req.body);
    const results = await AppDataSource.getRepository(Pick).save(pick);
    return res.send(results);
});

app.put("/pick/:id", async function (req: Request, res: Response) {
    const pick = await AppDataSource.getRepository(Pick).findOneBy({
        id: parseInt(req.params.id),
    });
    AppDataSource.getRepository(Pick).merge(pick, req.body);
    const results = await AppDataSource.getRepository(Pick).save(pick);
    return res.send(results);
});

app.delete("/pick/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Pick).delete(
        req.params.id
    );
    return res.send(results);
});

// register TEAM routes
app.get("/players", async function (req: Request, res: Response) {
    const players = await AppDataSource.getRepository(Player).find();
    res.json(players);
});

app.get("/player/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Player).findOneBy({
        id: parseInt(req.params.id),
    });
    return res.send(results);
});

app.post("/player", async function (req: Request, res: Response) {
    const player = await AppDataSource.getRepository(Player).create(req.body);
    const results = await AppDataSource.getRepository(Player).save(player);
    return res.send(results);
});

app.put("/player/:id", async function (req: Request, res: Response) {
    const player = await AppDataSource.getRepository(Player).findOneBy({
        id: parseInt(req.params.id),
    });
    AppDataSource.getRepository(Player).merge(player, req.body);
    const results = await AppDataSource.getRepository(Player).save(player);
    return res.send(results);
});

app.delete("/player/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Player).delete(
        req.params.id
    );
    return res.send(results);
});

// register TEAM routes
app.get("/schedules", async function (req: Request, res: Response) {
    const schedules = await AppDataSource.getRepository(Schedule).find();
    res.json(schedules);
});

app.get("/schedule/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Schedule).findOneBy({
        id: parseInt(req.params.id),
    });
    return res.send(results);
});

app.post("/schedule", async function (req: Request, res: Response) {
    const schedule = await AppDataSource.getRepository(Schedule).create(
        req.body
    );
    const results = await AppDataSource.getRepository(Schedule).save(schedule);
    return res.send(results);
});

app.put("/schedule/:id", async function (req: Request, res: Response) {
    const schedule = await AppDataSource.getRepository(Schedule).findOneBy({
        id: parseInt(req.params.id),
    });
    AppDataSource.getRepository(Schedule).merge(schedule, req.body);
    const results = await AppDataSource.getRepository(Schedule).save(schedule);
    return res.send(results);
});

app.delete("/schedule/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Schedule).delete(
        req.params.id
    );
    return res.send(results);
});

// register TEAM routes
app.get("/teams", async function (req: Request, res: Response) {
    const teams = await AppDataSource.getRepository(Team).find();
    res.json(teams);
});

app.get("/team/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Team).findOneBy({
        id: parseInt(req.params.id),
    });
    return res.send(results);
});

app.post("/team", async function (req: Request, res: Response) {
    const team = await AppDataSource.getRepository(Team).create(req.body);
    const results = await AppDataSource.getRepository(Team).save(team);
    return res.send(results);
});

app.put("/team/:id", async function (req: Request, res: Response) {
    const team = await AppDataSource.getRepository(Team).findOneBy({
        id: parseInt(req.params.id),
    });
    AppDataSource.getRepository(Team).merge(team, req.body);
    const results = await AppDataSource.getRepository(Team).save(team);
    return res.send(results);
});

app.delete("/team/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Team).delete(
        req.params.id
    );
    return res.send(results);
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
