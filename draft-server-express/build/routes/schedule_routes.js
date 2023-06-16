"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRoutes = void 0;
const ScheduleController_1 = require("../controller/ScheduleController");
exports.ScheduleRoutes = [
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
];
//# sourceMappingURL=schedule_routes.js.map