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
exports.TeamController = void 0;
const data_source_1 = require("../data-source");
const Team_1 = require("../entity/Team");
class TeamController {
    constructor() {
        this.teamRepository = data_source_1.AppDataSource.getRepository(Team_1.Team);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.teamRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            const team = yield this.teamRepository.findOne({
                where: { id },
            });
            if (!team) {
                return "unregistered team";
            }
            return team;
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, age } = request.body;
            const team = Object.assign(new Team_1.Team(), {
                firstName,
                lastName,
                age,
            });
            return this.teamRepository.save(team);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            let teamToRemove = yield this.teamRepository.findOneBy({ id });
            if (!teamToRemove) {
                return "this team not exist";
            }
            yield this.teamRepository.remove(teamToRemove);
            return "team has been removed";
        });
    }
}
exports.TeamController = TeamController;
//# sourceMappingURL=TeamController.js.map