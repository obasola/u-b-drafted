// src/modules/pick/repository.ts
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';


export class PickRepository {
  constructor(private prisma: PrismaClient) {}

  async create(req:Request, res:Response) {
        try {
          const newPickRecord = await this.prisma.pick.create({
            data: {
                    selectionRound: req.body.selectionRound,
                    selectionNumber: req.body.selectionNumber,
                    selectionYear: req.body.selectionYear,
                    selectionPickFrom: req.body.selectionPickFrom,
                    selectionPickTo: req.body.selectionPickTo,
                    combineScore: req.body.combineScore,
                    Team_id: req.body.Team_id,
                    Player_id: req.body.Player_id,
                },
            });
          res.status(200).json(newPickRecord);
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany()  {
    return this.prisma.pick.findMany();
  }

  async readOne(req: Request, res: Response){
    const id = parseInt(req.params.id, 10);
    const entity = await this.findOneById(id,res);
    res.json(entity);
  }
  
  async findOneById(id: number, res: Response){
    const entity = await this.prisma.pick.findUnique({
        where: {
            id: Number(id),
        }
    })
    res.json(entity);
    return entity;
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const {selectionRound,selectionNumber,
        selectionYear,selectionPickFrom, selectionPickTo,
        combineScore,Team_id,Player_id} = req.body;

   
    const pick = await this.prisma.pick.update({
      where: { id: Number(id) },
        data: {selectionRound,selectionNumber,
            selectionYear,selectionPickFrom, selectionPickTo,
            combineScore,Team_id,Player_id},
      });
      res.json(pick);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.pick.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
