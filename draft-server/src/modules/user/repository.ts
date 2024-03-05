// src/modules/user/repository.ts
import { Request, Response } from 'express';
import { DatabaseService } from '../../utils/db.server';

export class PersonRepository {
  private prisma: DatabaseService;
  constructor() {
    this.prisma = new DatabaseService();
  }

  async create(req:Request, res:Response) {
        try {
          const entity = await this.prisma.getDbHandle().person.create({
            data: {
              userName: req.body.userName,
              emailAddress: req.body.emailAddress,
              password: req.body.password,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              },
            });
          res.status(200).json(entity);
        } catch (e) {
          res.status(500).json({ error: e });
        }
  }
  
  async readMany()  {
    return this.prisma.getDbHandle().person.findMany();
  }

  async readOne(id: number, res: Response){
    const entity = await this.prisma.getDbHandle().person.findUnique({
        where: {
            id,
        }
    })
    return entity;
  }

  async update(req: Request, res: Response) {
    
    const {id} = req.params;
    
    const {
        userName,
        emailAddress,
        password,
        firstName,
        lastName
      } = req.body;

   
    const combScore = await this.prisma.getDbHandle().person.update({
      where: { id: Number(id) },
        data: {
          userName,
          emailAddress,
          password,
          firstName,
          lastName},
      });
      res.json(combScore);
  }

  async delete(req: Request) {
    const id = req.params;
    await this.prisma.getDbHandle().person.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
