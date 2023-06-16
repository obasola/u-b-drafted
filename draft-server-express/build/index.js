"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Team_1 = require("./entity/Team");
const Schedule_1 = require("./entity/Schedule");
const Player_1 = require("./entity/Player");
const Pick_1 = require("./entity/Pick");
const CombineScore_1 = require("./entity/CombineScore");
const dotenv = require("dotenv");
const express = require("express");
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Loading teams from the database...");
    const teams = yield data_source_1.AppDataSource.manager.find(Team_1.Team);
    console.log("Loaded teams count: ", teams.length);
    console.log("Here you can setup and run express / fastify / any other framework.");
}))
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
app.get("/combine_scores", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const combineScores = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).find();
        res.json(combineScores);
    });
});
app.get("/combine_score/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).findOneBy({
            id: parseInt(req.params.id),
        });
        return res.send(results);
    });
});
app.post("/combine_score", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const combineScore = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).create(req.body);
        const results = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).save(combineScore);
        return res.send(results);
    });
});
app.put("/combine_score/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const combineScore = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).findOneBy({
            id: parseInt(req.params.id),
        });
        data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).merge(combineScore, req.body);
        const results = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).save(combineScore);
        return res.send(results);
    });
});
app.delete("/combine_score/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore).delete(req.params.id);
        return res.send(results);
    });
});
// register TEAM routes
app.get("/picks", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const picks = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).find();
        res.json(picks);
    });
});
app.get("/pick/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).findOneBy({
            id: parseInt(req.params.id),
        });
        return res.send(results);
    });
});
app.post("/pick", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pick = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).create(req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).save(pick);
        return res.send(results);
    });
});
app.put("/pick/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pick = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).findOneBy({
            id: parseInt(req.params.id),
        });
        data_source_1.AppDataSource.getRepository(Pick_1.Pick).merge(pick, req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).save(pick);
        return res.send(results);
    });
});
app.delete("/pick/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Pick_1.Pick).delete(req.params.id);
        return res.send(results);
    });
});
// register TEAM routes
app.get("/players", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const players = yield data_source_1.AppDataSource.getRepository(Player_1.Player).find();
        res.json(players);
    });
});
app.get("/player/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Player_1.Player).findOneBy({
            id: parseInt(req.params.id),
        });
        return res.send(results);
    });
});
app.post("/player", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const player = yield data_source_1.AppDataSource.getRepository(Player_1.Player).create(req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Player_1.Player).save(player);
        return res.send(results);
    });
});
app.put("/player/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const player = yield data_source_1.AppDataSource.getRepository(Player_1.Player).findOneBy({
            id: parseInt(req.params.id),
        });
        data_source_1.AppDataSource.getRepository(Player_1.Player).merge(player, req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Player_1.Player).save(player);
        return res.send(results);
    });
});
app.delete("/player/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Player_1.Player).delete(req.params.id);
        return res.send(results);
    });
});
// register TEAM routes
app.get("/schedules", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schedules = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).find();
        res.json(schedules);
    });
});
app.get("/schedule/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).findOneBy({
            id: parseInt(req.params.id),
        });
        return res.send(results);
    });
});
app.post("/schedule", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schedule = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).create(req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).save(schedule);
        return res.send(results);
    });
});
app.put("/schedule/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schedule = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).findOneBy({
            id: parseInt(req.params.id),
        });
        data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).merge(schedule, req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).save(schedule);
        return res.send(results);
    });
});
app.delete("/schedule/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Schedule_1.Schedule).delete(req.params.id);
        return res.send(results);
    });
});
// register TEAM routes
app.get("/teams", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const teams = yield data_source_1.AppDataSource.getRepository(Team_1.Team).find();
        res.json(teams);
    });
});
app.get("/team/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Team_1.Team).findOneBy({
            id: parseInt(req.params.id),
        });
        return res.send(results);
    });
});
app.post("/team", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const team = yield data_source_1.AppDataSource.getRepository(Team_1.Team).create(req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Team_1.Team).save(team);
        return res.send(results);
    });
});
app.put("/team/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const team = yield data_source_1.AppDataSource.getRepository(Team_1.Team).findOneBy({
            id: parseInt(req.params.id),
        });
        data_source_1.AppDataSource.getRepository(Team_1.Team).merge(team, req.body);
        const results = yield data_source_1.AppDataSource.getRepository(Team_1.Team).save(team);
        return res.send(results);
    });
});
app.delete("/team/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield data_source_1.AppDataSource.getRepository(Team_1.Team).delete(req.params.id);
        return res.send(results);
    });
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map