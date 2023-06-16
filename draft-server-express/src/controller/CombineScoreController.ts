import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { CombineScore } from "../entity/CombineScore";

export class CombineScoreController {
    private combinescoreRepository = AppDataSource.getRepository(CombineScore);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.combinescoreRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const combinescore = await this.combinescoreRepository.findOne({
            where: { id },
        });

        if (!combinescore) {
            return "unregistered combinescore";
        }
        return combinescore;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const combinescore = Object.assign(new CombineScore(), {
            firstName,
            lastName,
            age,
        });

        return this.combinescoreRepository.save(combinescore);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        let combinescoreToRemove = await this.combinescoreRepository.findOneBy({
            id,
        });

        if (!combinescoreToRemove) {
            return "this combinescore not exist";
        }

        await this.combinescoreRepository.remove(combinescoreToRemove);

        return "combinescore has been removed";
    }
}
