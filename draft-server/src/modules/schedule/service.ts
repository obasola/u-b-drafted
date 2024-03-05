import { ScheduleRepository } from "./repository";
import {Request, Response} from "express";
export class ScheduleService {
  private dbRepository: ScheduleRepository;
  constructor() {
    this.dbRepository = new ScheduleRepository();
  }
  async create(req: Request, res: Response) : Promise<void> {
    this.dbRepository.create(req,res);
  }
  async readMany(): Promise<any[]> {
    const rows = this.dbRepository.readMany();
    console.log("Rows found using repository call: "+ (await rows).length);
    return rows;
  }
  async readOne(req: Request, res: Response): Promise<any> {
    let id = parseInt(req.params.id, 0);
    const entity = await this.dbRepository.readOne(id, res);
    return entity;
  }
  async update(req: Request, res: Response): Promise<any> {
    const entity = await this.dbRepository.update(req, res);

    if (entity != null) {
      res.status(200);
      return entity;
    } else {
      res.status(404).json({ error: 'Person score update failed' });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    await this.dbRepository.delete(req);

    const entity = this.dbRepository.readOne(id, res);
    if (entity != null) {
      res.status(404).json({ error: 'Person score delete failed' });
    }else{
      res.status(200);
    }
  }
}