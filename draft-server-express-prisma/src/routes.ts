import { UserController } from "./controller/UserController";
import { CombineScoreController } from "./controller/CombineScoreController";
import { PickController } from "./controller/PickController";
import { PlayerController } from "./controller/PlayerController";
import { TeamController } from "./controller/TeamController";
import { ScheduleController } from "./controller/ScheduleController";

export default class Routes {
    getRoutes() {
        return this.routeList;
    }
    routeList = [
        {
            method: "get",
            route: "/users",
            controller: UserController,
            action: "all",
        },
        {
            method: "get",
            route: "/users/:id",
            controller: UserController,
            action: "one",
        },
        {
            method: "post",
            route: "/users",
            controller: UserController,
            action: "save",
        },
        {
            method: "delete",
            route: "/users/:id",
            controller: UserController,
            action: "remove",
        },

        {
            method: "get",
            route: "/combine_scores",
            controller: CombineScoreController,
            action: "all",
        },
        {
            method: "get",
            route: "/combine_scores/:id",
            controller: CombineScoreController,
            action: "one",
        },
        {
            method: "post",
            route: "/combine_scores",
            controller: CombineScoreController,
            action: "save",
        },
        {
            method: "delete",
            route: "/combine_scores/:id",
            controller: CombineScoreController,
            action: "remove",
        },
        {
            method: "get",
            route: "/picks",
            controller: PickController,
            action: "all",
        },
        {
            method: "get",
            route: "/picks/:id",
            controller: PickController,
            action: "one",
        },
        {
            method: "post",
            route: "/picks",
            controller: PickController,
            action: "save",
        },
        {
            method: "delete",
            route: "/picks/:id",
            controller: PickController,
            action: "remove",
        },

        {
            method: "get",
            route: "/players",
            controller: PlayerController,
            action: "all",
        },
        {
            method: "get",
            route: "/players/:id",
            controller: PlayerController,
            action: "one",
        },
        {
            method: "post",
            route: "/players",
            controller: PlayerController,
            action: "save",
        },
        {
            method: "delete",
            route: "/players/:id",
            controller: PlayerController,
            action: "remove",
        },

        {
            method: "get",
            route: "/schedules",
            controller: ScheduleController,
            action: "all",
        },
        {
            method: "get",
            route: "/schedules/:id",
            controller: ScheduleController,
            action: "one",
        },
        {
            method: "post",
            route: "/schedules",
            controller: ScheduleController,
            action: "save",
        },
        {
            method: "delete",
            route: "/schedules/:id",
            controller: ScheduleController,
            action: "remove",
        },

        {
            method: "get",
            route: "/teams",
            controller: TeamController,
            action: "all",
        },
        {
            method: "get",
            route: "/teams/:id",
            controller: TeamController,
            action: "one",
        },
        {
            method: "post",
            route: "/teams",
            controller: TeamController,
            action: "save",
        },
        {
            method: "delete",
            route: "/teams/:id",
            controller: TeamController,
            action: "remove",
        },
    ];
}
