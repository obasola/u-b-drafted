import { PlayerController } from "../controller/PlayerController";

export const PlayerRoutes = [
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
];
