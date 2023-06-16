"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRoutes = void 0;
const PlayerController_1 = require("../controller/PlayerController");
exports.PlayerRoutes = [
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
];
//# sourceMappingURL=player_routes.js.map