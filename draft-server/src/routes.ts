import { PersonController } from "./modules/user/controller";
import { CombineController } from "./modules/combinescore/controller";
import { PickController } from "./modules/pick/controller";
import { PlayerController } from "./modules/player/controller";
import { TeamController } from "./modules/team/controller";
import { ScheduleController } from "./modules/schedule/controller";

export default class Routes {
    getRoutes() {
        return this.routeList;
    }
    routeList = [
        {
            method: "get",
            route: "/users",
            controller: PersonController,
            action: "all",
        },
        {
            method: "get",
            route: "/users/:id",
            controller: PersonController,
            action: "one",
        },
        {
            method: "post",
            route: "/users",
            controller: PersonController,
            action: "save",
        },
        {
            method: "delete",
            route: "/users/:id",
            controller: PersonController,
            action: "remove",
        },

        {
            method: "get",
            route: "/combine_scores",
            controller: CombineController,
            action: "all",
        },
        {
            method: "get",
            route: "/combine_scores/:id",
            controller: CombineController,
            action: "one",
        },
        {
            method: "post",
            route: "/combine_scores",
            controller: CombineController,
            action: "save",
        },
        {
            method: "delete",
            route: "/combine_scores/:id",
            controller: CombineController,
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