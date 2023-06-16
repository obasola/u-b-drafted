"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombineScoreRoutes = void 0;
const CombineScoreController_1 = require("../controller/CombineScoreController");
exports.CombineScoreRoutes = [
    {
        method: "get",
        route: "/combine_scores",
        controller: CombineScoreController_1.CombineScoreController,
        action: "all",
    },
    {
        method: "get",
        route: "/combine_scores/:id",
        controller: CombineScoreController_1.CombineScoreController,
        action: "one",
    },
    {
        method: "post",
        route: "/combine_scores",
        controller: CombineScoreController_1.CombineScoreController,
        action: "save",
    },
    {
        method: "delete",
        route: "/combine_scores/:id",
        controller: CombineScoreController_1.CombineScoreController,
        action: "remove",
    },
];
//# sourceMappingURL=combine_score_routes.js.map