// src/modules/pickscore/controller.ts
import { Request, Response } from 'express';
import { PickRepository } from './repository';

export class PickController {
  constructor(private dbRepository: PickRepository) {}

  async create(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.create(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Insert failed to create new Pick Score' });
    }
  }

  async readById(req: Request, res: Response) {
    const entity = await this.dbRepository.readOne(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Pick score not found' });
    }
  }

  async readMany(req: Request, res: Response) {
    const entity  = await this.dbRepository.readMany();

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Pick score not found' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.update(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Pick score update failed' });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    await this.dbRepository.delete(req);

    const entity = this.dbRepository.findOneById(id, res);
    if (entity != null) {
      res.status(404).json({ error: 'Pick score delete failed' });
    }
  }
}
