// src/modules/user/repository.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export class PlayerRepository {
  constructor(private prisma: PrismaClient) {}

  async create(req:Request, res:Response) {
        try {
          const entity = await this.prisma.player.create({
            data: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    age: req.body.age,
                    height: req.body.height,
                    weight: req.body.weight,
                    handSize: req.body.handSize,
                    armLength: req.body.armLength,
                    homeCity: req.body.homeCity,
                    homeState: req.body.homeState,
                    university: req.body.university,
                    status: req.body.status,
                    position: req.body.position,
                    teamId: req.body.teamId,
                    year_entered_league: req.body.year_entered_league,
                },
            });
          res.status(200).json(entity);
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany()  {
    return this.prisma.player.findMany();
  }

  async readOne(req: Request, res: Response){
    const id = parseInt(req.params.id, 10);
    const entity = await this.findOneById(id,res);
    res.json(entity);
  }
  
  async findOneById(id: number, res: Response){
    const entity = await this.prisma.player.findUnique({
        where: {
            id: Number(id),
        }
    })
    res.json(entity);
    return entity;
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const { 
          firstName,
          lastName,
          age,
          height,
          weight,
          handSize,
          armLength,
          homeCity,
          homeState,
          university,
          status,
          position,
          teamId,
          year_entered_league,
        } = req.body;

   
    const combScore = await this.prisma.player.update({
      where: { id: Number(id) },
        data: { 
          firstName,
          lastName,
          age,
          height,
          weight,
          handSize,
          armLength,
          homeCity,
          homeState,
          university,
          status,
          position,
          teamId,
          year_entered_league,
        },
      });
      res.json(combScore);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.player.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
