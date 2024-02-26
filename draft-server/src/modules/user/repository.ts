// src/modules/user/repository.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export class PersonRepository {
  constructor(private prisma: PrismaClient) {}

  async create(req:Request, res:Response) {
        try {
          const entity = await this.prisma.person.create({
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
    return this.prisma.person.findMany();
  }

  async readOne(req: Request, res: Response){
    const id = parseInt(req.params.id, 10);
    const entity = await this.findOneById(id,res);
    res.json(entity);
  }
  
  async findOneById(id: number, res: Response){
    const entity = await this.prisma.person.findUnique({
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
        userName,
        emailAddress,
        password,
        firstName,
        lastName
      } = req.body;

   
    const combScore = await this.prisma.person.update({
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
    await this.prisma.person.delete({
        where: {
            id: Number(id),
        },
    })
  }
  // Add more repository methods as needed
}
