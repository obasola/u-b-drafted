// src/modules/user/repository.ts
import { DatabaseService } from "../../utils/db.server";
import { Request, Response } from 'express';

type TeamTYpe = {
  id: number;
  name: string;
  
}

export class TeamRepository {

  private prisma: DatabaseService;
  constructor() {
    this.prisma = new DatabaseService();
  }

  async create(req:Request, res:Response) :Promise<void>{
    console.log("Creating a new Team...");
    console.log("name: "+req.body.name+", conf: "+req.body.conference);
        try {
          const entity = await this.prisma.getDbHandle().team.create({
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
  
  async readMany() :Promise<any> {
    return this.prisma.getDbHandle().team.findMany({
      include: {Player: true},
    });
  }
  async findManyNames(): Promise<any[]> {
    const listTeamNames = this.prisma.getDbHandle().team.findMany({
      select: {
        id: true,
        name:true,
      }
    });
    console.log("Names found: "+ (await listTeamNames).length);
    return listTeamNames;
  }

  async findOne(id: number, res: Response):Promise<any>{
    const user = await this.prisma.getDbHandle().team.findUnique({
      where: {
        id: Number(id) ,
      },
    })
  }

  async findByName(name: string, res: Response):Promise<any>{
    const user = await this.prisma.getDbHandle().team.findFirst({
      where: {
       name: (name) ,
      },
    })
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const { 
          name,               
          city,              
          state,             
          conference
        } = req.body;

   
    const entity = await this.prisma.getDbHandle().team.update({
      where: { id: Number(id) },
        data: {
          name,               
          city,              
          state,             
          conference
        },
      });
      res.json(entity);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.getDbHandle().team.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
