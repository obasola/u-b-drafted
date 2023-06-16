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
exports.CombineScoreController = void 0;
const data_source_1 = require("../data-source");
const CombineScore_1 = require("../entity/CombineScore");
class CombineScoreController {
    constructor() {
        this.combinescoreRepository = data_source_1.AppDataSource.getRepository(CombineScore_1.CombineScore);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.combinescoreRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            const combinescore = yield this.combinescoreRepository.findOne({
                where: { id },
            });
            if (!combinescore) {
                return "unregistered combinescore";
            }
            return combinescore;
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, age } = request.body;
            const combinescore = Object.assign(new CombineScore_1.CombineScore(), {
                firstName,
                lastName,
                age,
            });
            return this.combinescoreRepository.save(combinescore);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            let combinescoreToRemove = yield this.combinescoreRepository.findOneBy({
                id,
            });
            if (!combinescoreToRemove) {
                return "this combinescore not exist";
            }
            yield this.combinescoreRepository.remove(combinescoreToRemove);
            return "combinescore has been removed";
        });
    }
}
exports.CombineScoreController = CombineScoreController;
//# sourceMappingURL=CombineScoreController.js.map