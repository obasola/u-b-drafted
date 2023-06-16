import { CombineScoreController } from "../controller/CombineScoreController";

export const CombineScoreRoutes = [
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
];
