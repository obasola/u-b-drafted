import { Person } from "@prisma/client";
import { PersonRepository } from "./repository";
import {Request, Response} from "express";
export class PersonService {
  private dbRepository: PersonRepository;
  constructor() {
    this.dbRepository = new PersonRepository();
  }
  async create(req: Request, res: Response) : Promise<void> {
    this.dbRepository.create(req,res);
  }
  async readMany(): Promise<Person[]> {
    const rows = this.dbRepository.readMany();
    console.log("Rows found using repository call: "+ (await rows).length);
    return rows;
  }

  async readOne(req: Request, res: Response): Promise<any> {
    let id = parseInt(req.params.id, 0);
    const entity = await this.dbRepository.readOne(id, res);
    return entity;
  }
  async update(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.update(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Person score update failed' });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    await this.dbRepository.delete(req);

    const entity = this.dbRepository.findOneById(id, res);
    if (entity != null) {
      res.status(404).json({ error: 'Person score delete failed' });
    }
  }
}