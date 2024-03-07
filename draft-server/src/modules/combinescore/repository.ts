import { Request, Response } from 'express';
import { DatabaseService } from '../../utils/db.server';

export class CombineRepository {
  private prisma: DatabaseService;
  constructor() {
    this.prisma = new DatabaseService();
  }
  async create(req:Request, res:Response) {
        try {
          const newCombScoreRecord = await this.prisma.getDbHandle().combine_Score.create({
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
  
  async readMany()  {
    return this.prisma.getDbHandle().combine_Score.findMany();
  }

  async readOne(req: Request, res: Response){
    const id = parseInt(req.params.id, 10);
    const entity = await this.findOneById(id,res);
    res.json(entity);
  }
  
  async findOneById(id: number, res: Response){
    const entity = await this.prisma.getDbHandle().combine_Score.findUnique({
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

   
    const combScore = await this.prisma.getDbHandle().combine_Score.update({
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
    await this.prisma.getDbHandle().combine_Score.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
