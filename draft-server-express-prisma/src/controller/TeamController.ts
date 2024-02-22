import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Team } from "../models/Team";

export class TeamController {
    private teamRepository = AppDataSource.getRepository(Team);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.teamRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const team = await this.teamRepository.findOne({
            where: { id },
        });

        if (!team) {
            return "unregistered team";
        }
        return team;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const team = Object.assign(new Team(), {
            firstName,
            lastName,
            age,
        });

        return this.teamRepository.save(team);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        let teamToRemove = await this.teamRepository.findOneBy({ id });

        if (!teamToRemove) {
            return "this team not exist";
        }

        await this.teamRepository.remove(teamToRemove);

        return "team has been removed";
    }
}
