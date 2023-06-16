"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickRoutes = void 0;
const PickController_1 = require("../controller/PickController");
exports.PickRoutes = [
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
];
//# sourceMappingURL=pick_routes.js.map