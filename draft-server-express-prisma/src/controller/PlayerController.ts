import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Player } from "../entity/Player";

export class PlayerController {
    private playerRepository = AppDataSource.getRepository(Player);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.playerRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const player = await this.playerRepository.findOne({
            where: { id },
        });

        if (!player) {
            return "unregistered player";
        }
        return player;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const player = Object.assign(new Player(), {
            firstName,
            lastName,
            age,
        });

        return this.playerRepository.save(player);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        let playerToRemove = await this.playerRepository.findOneBy({ id });

        if (!playerToRemove) {
            return "this player not exist";
        }

        await this.playerRepository.remove(playerToRemove);

        return "player has been removed";
    }
}
