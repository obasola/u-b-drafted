import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entity/Schedule";

export class ScheduleController {
    private scheduleRepository = AppDataSource.getRepository(Schedule);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.scheduleRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const schedule = await this.scheduleRepository.findOne({
            where: { id },
        });

        if (!schedule) {
            return "unregistered schedule";
        }
        return schedule;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const schedule = Object.assign(new Schedule(), {
            firstName,
            lastName,
            age,
        });

        return this.scheduleRepository.save(schedule);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        let scheduleToRemove = await this.scheduleRepository.findOneBy({ id });

        if (!scheduleToRemove) {
            return "this schedule not exist";
        }

        await this.scheduleRepository.remove(scheduleToRemove);

        return "schedule has been removed";
    }
}
