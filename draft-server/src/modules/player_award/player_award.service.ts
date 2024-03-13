
import { DatabaseService } from "../../utils/db.server";
import { Player } from "./entity";
import { PlayerAwardRepository } from "./repository";
import { Request, Response } from "express";
type PlayerAward = {
  id: number;
  award_name: string;
  year_awarded: number;
  playerId: number;
  player: Player;
}

export class PlayerAwardService {
  
  private repo:PlayerAwardRepository;

  constructor() {
    this.repo = new PlayerAwardRepository();
  }

  async create(req: Request, res: Response) : Promise<void> {
    console.log("In Service call, checking values passed from Request object...");
    console.log("name: "+req.body.award_name+", conf: "+req.body.year_awarded);
    this.repo.create(req,res);
  }

  async readMany(): Promise<PlayerAward[]> {
    const rows = this.repo.readMany();
    console.log("Rows found using repository call: "+ (await rows).length);
    return rows;
  }

  async readOne(req: Request, res: Response): Promise<any> {
    let id = parseInt(req.params.id, 10);
    console.log("Query Id: "+id);
    const entity = await this.repo.findOne(id, res);
    console.log("Found result of: "+entity);
    return entity;
  }
  async update(req: Request, res: Response) : Promise<void> {
    const entity = this.repo.update(req, res);
    return entity;
  }

  async delete(req: Request, res: Response): Promise<void> {
    return this.repo.delete(req);
  }
}