import { TeamController } from "../controller/TeamController";

export const TeamRoutes = [
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
