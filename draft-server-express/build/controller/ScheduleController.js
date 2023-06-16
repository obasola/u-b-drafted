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
exports.ScheduleController = void 0;
const data_source_1 = require("../data-source");
const Schedule_1 = require("../entity/Schedule");
class ScheduleController {
    constructor() {
        this.scheduleRepository = data_source_1.AppDataSource.getRepository(Schedule_1.Schedule);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.scheduleRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            const schedule = yield this.scheduleRepository.findOne({
                where: { id },
            });
            if (!schedule) {
                return "unregistered schedule";
            }
            return schedule;
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, age } = request.body;
            const schedule = Object.assign(new Schedule_1.Schedule(), {
                firstName,
                lastName,
                age,
            });
            return this.scheduleRepository.save(schedule);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(request.params.id);
            let scheduleToRemove = yield this.scheduleRepository.findOneBy({ id });
            if (!scheduleToRemove) {
                return "this schedule not exist";
            }
            yield this.scheduleRepository.remove(scheduleToRemove);
            return "schedule has been removed";
        });
    }
}
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=ScheduleController.js.map