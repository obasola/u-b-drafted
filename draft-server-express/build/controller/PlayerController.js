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
exports.PlayerController = void 0;
const data_source_1 = require("../data-source");
const Player_1 = require("../entity/Player");
class PlayerController {
    constructor() {
        this.playerRepository = data_source_1.AppDataSource.getRepository(Player_1.Player);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.playerRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            const player = yield this.playerRepository.findOne({
                where: { id },
            });
            if (!player) {
                return "unregistered player";
            }
            return player;
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, age } = request.body;
            const player = Object.assign(new Player_1.Player(), {
                firstName,
                lastName,
                age,
            });
            return this.playerRepository.save(player);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            let playerToRemove = yield this.playerRepository.findOneBy({ id });
            if (!playerToRemove) {
                return "this player not exist";
            }
            yield this.playerRepository.remove(playerToRemove);
            return "player has been removed";
        });
    }
}
exports.PlayerController = PlayerController;
//# sourceMappingURL=PlayerController.js.map