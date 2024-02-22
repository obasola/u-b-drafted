import { CombineScore } from './../entity/CombineScore';

import { NextFunction, Request, Response } from "express";
import { CombineScore } from "../models/CombineScore";
import { PrismaClient } from "@prisma/client";

export class CombineScoreController {
    private prisma = new PrismaClient();

    async all(request: Request, response: Response, next: NextFunction) {
        return this.prisma.CombineScore.
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const combinescore = await this.prisma.CombineScore.findOne({
            where: { id },
        });

        if (!combinescore) {
            return "unregistered combinescore";
        }
        return combinescore;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { fortyTime, tenYardSplit, 
            twentyYard_shuttle, threeCone, 
            verticalLeap, playerId, broadJump } = request.body;

        const combinescore = Object.assign(new CombineScore(fortyTime, tenYardSplit, 
            twentyYard_shuttle, threeCone, 
            verticalLeap, playerId, broadJump  ), {
        });

        return this.prisma.CombineScore.save(combinescore);
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
