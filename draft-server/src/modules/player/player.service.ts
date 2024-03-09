
import { DatabaseService } from "../../utils/db.server";
import { PlayerRepository } from "./repository";
import { Request, Response } from "express";
type Player = {
  id: number;
  name: string;
  
}

export class PlayerService {
  
  private service: DatabaseService;
  private repo:PlayerRepository = new PlayerRepository();

  constructor() {
    this.service = new DatabaseService();
  }

  async create(req: Request, res: Response) : Promise<void> {
    console.log("In Service call, checking values passed from Request object...");
    console.log("name: "+req.body.name+", conf: "+req.body.conference);
    this.repo.create(req,res);
  }

  async readMany(): Promise<Player[]> {
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