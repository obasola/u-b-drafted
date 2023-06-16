"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./controller/UserController");
const CombineScoreController_1 = require("./controller/CombineScoreController");
const PickController_1 = require("./controller/PickController");
const PlayerController_1 = require("./controller/PlayerController");
const TeamController_1 = require("./controller/TeamController");
const ScheduleController_1 = require("./controller/ScheduleController");
class Routes {
    constructor() {
        this.routeList = [
            {
                method: "get",
                route: "/users",
                controller: UserController_1.UserController,
                action: "all",
            },
            {
                method: "get",
                route: "/users/:id",
                controller: UserController_1.UserController,
                action: "one",
            },
            {
                method: "post",
                route: "/users",
                controller: UserController_1.UserController,
                action: "save",
            },
            {
                method: "delete",
                route: "/users/:id",
                controller: UserController_1.UserController,
                action: "remove",
            },
            {
                method: "get",
                route: "/combine_scores",
                controller: CombineScoreController_1.CombineScoreController,
                action: "all",
            },
            {
                method: "get",
                route: "/combine_scores/:id",
                controller: CombineScoreController_1.CombineScoreController,
                action: "one",
            },
            {
                method: "post",
                route: "/combine_scores",
                controller: CombineScoreController_1.CombineScoreController,
                action: "save",
            },
            {
                method: "delete",
                route: "/combine_scores/:id",
                controller: CombineScoreController_1.CombineScoreController,
                action: "remove",
            },
            {
                method: "get",
                route: "/picks",
                controller: PickController_1.PickController,
                action: "all",
            },
            {
                method: "get",
                route: "/picks/:id",
                controller: PickController_1.PickController,
                action: "one",
            },
            {
                method: "post",
                route: "/picks",
                controller: PickController_1.PickController,
                action: "save",
            },
            {
                method: "delete",
                route: "/picks/:id",
                controller: PickController_1.PickController,
                action: "remove",
            },
            {
                method: "get",
                route: "/players",
                controller: PlayerController_1.PlayerController,
                action: "all",
            },
            {
                method: "get",
                route: "/players/:id",
                controller: PlayerController_1.PlayerController,
                action: "one",
            },
            {
                method: "post",
                route: "/players",
                controller: PlayerController_1.PlayerController,
                action: "save",
            },
            {
                method: "delete",
                route: "/players/:id",
                controller: PlayerController_1.PlayerController,
                action: "remove",
            },
            {
                method: "get",
                route: "/schedules",
                controller: ScheduleController_1.ScheduleController,
                action: "all",
            },
            {
                method: "get",
                route: "/schedules/:id",
                controller: ScheduleController_1.ScheduleController,
                action: "one",
            },
            {
                method: "post",
                route: "/schedules",
                controller: ScheduleController_1.ScheduleController,
                action: "save",
            },
            {
                method: "delete",
                route: "/schedules/:id",
                controller: ScheduleController_1.ScheduleController,
                action: "remove",
            },
            {
                method: "get",
                route: "/teams",
                controller: TeamController_1.TeamController,
                action: "all",
            },
            {
                method: "get",
                route: "/teams/:id",
                controller: TeamController_1.TeamController,
                action: "one",
            },
            {
                method: "post",
                route: "/teams",
                controller: TeamController_1.TeamController,
                action: "save",
            },
            {
                method: "delete",
                route: "/teams/:id",
                controller: TeamController_1.TeamController,
                action: "remove",
            },
        ];
    }
    getRoutes() {
        return this.routeList;
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map