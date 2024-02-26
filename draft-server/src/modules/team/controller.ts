// src/modules/teamscore/controller.ts
import { Request, Response } from 'express';
import { TeamRepository } from './repository';
import { Team } from './entity';

export class TeamController {
  constructor(private dbRepository: TeamRepository) {}

  async create(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.create(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Insert failed to create new Team Score' });
    }
  }

  async readById(req: Request, res: Response) {
    const entity = await this.dbRepository.readOne(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Team score not found' });
    }
  }

  async readMany(req: Request, res: Response) {
    const entity  = await this.dbRepository.readMany(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Team score not found' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const entity = await this.dbRepository.update(req, res);

    if (entity != null) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Team score update failed' });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    await this.dbRepository.delete(req);

    const entity = this.dbRepository.findOneById(id, res);
    if (entity != null) {
      res.status(404).json({ error: 'Team score delete failed' });
    }
  }
}
