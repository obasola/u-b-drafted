// src/modules/user/repository.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export class TeamRepository {
  constructor(private prisma: PrismaClient) {}

  async create(req:Request, res:Response) {
        try {
          const entity = await this.prisma.team.create({
            data: {
                    name: req.body.name,
                    city: req.body.city,
                    state: req.body.state,
                    conference: req.body.conference,
                },
            });
          res.status(200).json(entity);
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany(req: Request, res: Response)  {
    return this.prisma.team.findMany();
  }

  async readOne(req: Request, res: Response){
    const id = parseInt(req.params.id, 10);
    const entity = await this.findOneById(id,res);
    res.json(entity);
  }
  
  async findOneById(id: number, res: Response){
    const entity = await this.prisma.team.findUnique({
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
          name,               
          city,              
          state,             
          conference
        } = req.body;

   
    const combScore = await this.prisma.team.update({
      where: { id: Number(id) },
        data: {
          name,               
          city,              
          state,             
          conference
        },
      });
      res.json(combScore);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.team.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
