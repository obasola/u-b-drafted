
import { DatabaseService } from "../../utils/db.server";
import { TeamRepository } from "./repository";
import { Request, Response } from "express";
type Team = {
  id: number;
  name: string;
  
}

export class TeamService {
  
  private service: DatabaseService;
  private repo:TeamRepository = new TeamRepository();

  constructor() {
    this.service = new DatabaseService();
  }

  async findManyNames(): Promise<Team[]> {
    const listTeamNames = this.repo.findManyNames();
    console.log("Names found using repository call: "+ (await listTeamNames).length);
    return listTeamNames;
  }

  async findMany(): Promise<Team[]> {
    const rows = this.repo.readMany();
    console.log("Rows found using repository call: "+ (await rows).length);
    return rows;
  }

  async modifyTeamData(req: Request, res: Response) : Promise<void> {
    const entity = this.repo.update(req, res);
    return entity;
  }
}