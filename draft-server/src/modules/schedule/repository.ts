// src/modules/user/repository.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { DatabaseService } from '../../utils/db.server';

export class ScheduleRepository {
  private prisma: DatabaseService;
  constructor() {
    this.prisma = new DatabaseService();
  }
  async create(req:Request, res:Response) {
        try {
          const entity = await this.prisma.getDbHandle().schedule.create({
            data: {
                    opponentId: req.body.opponentId,
                    homeTeamId: req.body.homeTeamId,
                    scheduleWeek: req.body.scheduleWeek,
                    gameDate: req.body.gameDate,
                    gameCity: req.body.gameCity,
                    gameStateProvince: req.body.gameStateProvince,
                    gameCountry: req.body.gameCountry,
                    gameLocation: req.body.gameLocation,
                    opponentConference: req.body.opponentConference,
                    opponentDivision: req.body.opponentDivision,
                    wonLostFlag: req.body.wonLostFlag,
                    homeOrAway: req.body.homeOrAway,
                    opponentScore: req.body.opponentScore,
                    homeScore: req.body.homeScore,
                },
            });
          res.status(200);
          return entity;
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany()  {
    return this.prisma.getDbHandle().schedule.findMany();
  }
  
  async readOne(id: number, res: Response){
    const entity = await this.prisma.getDbHandle().schedule.findUnique({
        where: {
            id: Number(id),
        }
    })
    return entity;
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const { 
            opponentId,
            homeTeamId,
            scheduleWeek,
            gameDate,
            gameCity,
            gameStateProvince,
            gameCountry,
            gameLocation,
            opponentConference,
            opponentDivision,
            wonLostFlag,
            homeOrAway,
            opponentScore,
            homeScore,
      } = req.body;

   
    const combScore = await this.prisma.getDbHandle().schedule.update({
      where: { id: Number(id) },
        data: { 
            opponentId,
            homeTeamId,
            scheduleWeek,
            gameDate,
            gameCity,
            gameStateProvince,
            gameCountry,
            gameLocation,
            opponentConference,
            opponentDivision,
            wonLostFlag,
            homeOrAway,
            opponentScore,
            homeScore,
        },
      });
      return combScore;
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.getDbHandle().schedule.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
