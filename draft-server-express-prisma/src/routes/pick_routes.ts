import { PickController } from "../controller/PickController";

export const PickRoutes = [
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
];
