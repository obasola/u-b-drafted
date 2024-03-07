import { Request, Response } from 'express';
import { DatabaseService } from '../../utils/db.server';

export class PlayerRepository {
  private prisma: DatabaseService;
  constructor() {
    this.prisma = new DatabaseService();
  }
  async create(req:Request, res:Response) {
        try {
          const entity = await this.prisma.getDbHandle().player.create({
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
          res.status(200);
          return entity;
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany()  {
    return this.prisma.getDbHandle().player.findMany();
  }
  
  async readOne(req: Request){
    let id = req.params.id;
    const entity = await this.prisma.getDbHandle().player.findUnique({
        where: {
            id: Number(id),
        }
    })
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

   
    const combScore = await this.prisma.getDbHandle().player.update({
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
      return combScore;
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.getDbHandle().player.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
