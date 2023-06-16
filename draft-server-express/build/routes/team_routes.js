"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutes = void 0;
const TeamController_1 = require("../controller/TeamController");
exports.TeamRoutes = [
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
//# sourceMappingURL=team_routes.js.map