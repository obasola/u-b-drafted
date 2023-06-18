"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickController = void 0;
const data_source_1 = require("../data-source");
const Pick_1 = require("../entity/Pick");
class PickController {
    constructor() {
        this.pickRepository = data_source_1.AppDataSource.getRepository(Pick_1.Pick);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const pickList = this.pickRepository.find();
            let i = 0;
            while (i < (yield pickList).length) {
                console.log("picklist = " + pickList[i]);
            }
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            const pick = yield this.pickRepository.findOne({
                where: { id },
            });
            if (!pick) {
                return "unregistered pick";
            }
            return pick;
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, teamId, playerId, selectionRound, selectionNumber, selectionYear, selectionPickFrom, selectionPickTo, combineScore, } = request.body;
            const pick = Object.assign(new Pick_1.Pick(), {
                id,
                teamId,
                playerId,
                selectionRound,
                selectionNumber,
                selectionYear,
                selectionPickFrom,
                selectionPickTo,
                combineScore,
            });
            return this.pickRepository.save(pick);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            let pickToRemove = yield this.pickRepository.findOneBy({ id });
            if (!pickToRemove) {
                return "this pick not exist";
            }
            yield this.pickRepository.remove(pickToRemove);
            return "pick has been removed";
        });
    }
}
exports.PickController = PickController;
//# sourceMappingURL=PickController.js.map