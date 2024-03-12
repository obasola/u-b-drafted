// src/modules/combinescore/controller.ts
import { Request, Response } from 'express';
import { CombineRepository } from './repository';
import { CombineScore } from './entity';

export class CombineService {
  private dbRepository: CombineRepository;
  constructor() {
    this.dbRepository = new CombineRepository();
  }
  async create(req: Request, res: Response) : Promise<void> {
    this.dbRepository.create(req,res);
  }
  async readMany(): Promise<any[]> {
    return this.dbRepository.readMany();
  }
  async readOne(req: Request, res: Response): Promise<any> {    
    const entity = await this.dbRepository.readOne(req, res);
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

    const entity = this.dbRepository.readOne(req, res);
    if (entity != null) {
      res.status(404).json({ error: 'Person score delete failed' });
    }else{
      res.status(200);
    }
  }
}