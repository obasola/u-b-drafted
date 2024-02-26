// src/modules/user/repository.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export class CombineRepository {
  constructor(private prisma: PrismaClient) {}

  async create(req:Request, res:Response) {
        try {
          const newCombScoreRecord = await this.prisma.combine_Score.create({
            data: {
                    fortyTime: req.body.fortyTime,
                    tenYardSplit: req.body.tenYardSplit,
                    twentyYardShuttle: req.body.twentyYardShuttle,
                    threeCone: req.body.threeCone,
                    verticalLeap: req.body.verticalLeap,
                    playerId: req.body.playerId,
                    broadJump: req.body.broadJump,
                },
            });
          res.status(200).json(newCombScoreRecord);
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany(res: Response)  {
    const entity = this.prisma.combine_Score.findMany();
    res.json(entity);
  }

  async readOne(req: Request, res: Response){
    const id = parseInt(req.params.id, 10);
    const entity = await this.findOneById(id,res);
    res.json(entity);
  }
  
  async findOneById(id: number, res: Response){
    const entity = await this.prisma.combine_Score.findUnique({
        where: {
            id: Number(id),
        }
    })
    res.json(entity);
    return entity;
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const {fortyTime,
      tenYardSplit,
      twentyYardShuttle,
      threeCone,
      verticalLeap,
      playerId,
      broadJump} = req.body;

   
    const combScore = await this.prisma.combine_Score.update({
      where: { id: Number(id) },
        data: {fortyTime,
          tenYardSplit,
          twentyYardShuttle,
          threeCone,
          verticalLeap,
          playerId,
          broadJump},
      });
      res.json(combScore);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.combine_Score.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
