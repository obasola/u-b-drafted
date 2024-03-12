// src/modules/user/repository.ts
import { DatabaseService } from "../../utils/db.server";
import { Request, Response } from 'express';

type PlayerAwardTYpe = {
  id: number;
  name: string;
  
}

export class PlayerAwardRepository {

  private prisma: DatabaseService;
  constructor() {
    this.prisma = new DatabaseService();
  }

  async create(req:Request, res:Response) {
    
    try {
      const entity = await this.prisma.getDbHandle().player_Award.create({
        data: {
                award_name: req.body.awardName,
                year_awarded: req.body.yearAwarded,
                playerId: parseInt(req.body.playerId, 10),

            },
        });
      res.status(200).json(entity);
      
    } catch (e) {
      console.log("Error on create ");
      res.status(500).json({ error: e });
    }
  
  }
  
  async readMany() :Promise<any> {
    return this.prisma.getDbHandle().player_Award.findMany();
  }

  async findOne(id: number, res: Response):Promise<any>{
return null;
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const { 
      award_name,
      year_awarded 
        } = req.body;

   
    const entity = await this.prisma.getDbHandle().player_Award.update({
      where: { id: Number(id) },
        data: {
          award_name,
          year_awarded 
        },
      });
      res.json(entity);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.getDbHandle().player_Award.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
