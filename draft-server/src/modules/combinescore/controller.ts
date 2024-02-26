// src/modules/combinescore/controller.ts
import { Request, Response } from 'express';
import { CombineRepository } from './repository';
import { CombineScore } from './entity';

export class CombineController {
  constructor(private dbRepository: CombineRepository) {}

  async create(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.create(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Insert failed to create new Combine Score'   });
    }
  }

  async readById(req: Request, res: Response) {
    const entity = await this.dbRepository.readOne(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Combine score not found' });
    }
  }

  async readMany(req: Request, res: Response) {
    const entity  = await this.dbRepository.readMany(res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Combine score not found' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.update(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Combine score update failed' });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    await this.dbRepository.delete(req);

    const entity = this.dbRepository.findOneById(id, res);
    if (entity != null) {
      res.status(404).json({ error: 'Combine score delete failed' });
    }
  }
}
