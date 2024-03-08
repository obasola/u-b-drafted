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
                    age: parseInt(req.body.age, 10),
                    height: parseInt(req.body.height, 10),
                    weight: parseInt(req.body.weight, 10),
                    handSize: parseInt(req.body.handSize, 10),
                    armLength: parseInt(req.body.armLength, 10),
                    homeCity: req.body.homeCity,
                    homeState: req.body.homeState,
                    university: req.body.university,
                    status: req.body.status,
                    position: req.body.position,
                    teamId: parseInt(req.body.teamId, 10)
                },
            });
          res.status(200);
          return entity;
        } catch (e) {
          console.log("Error on create ");
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
