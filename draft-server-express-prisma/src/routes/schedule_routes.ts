import { ScheduleController } from "../controller/ScheduleController";

export const ScheduleRoutes = [
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
];
