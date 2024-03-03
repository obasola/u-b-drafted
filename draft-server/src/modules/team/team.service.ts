
import { DatabaseService } from "../../utils/db.server";

type Team = {
  id: number;
  name: string;
  
}

export class TeamService {
  
  private service: DatabaseService;
  constructor() {
    this.service = new DatabaseService();
  }

  async findManyNames(): Promise<Team[]> {
    const listTeamNames = this.service.getDbHandle().team.findMany({
      select: {
        id: true,
        name:true,
      }
    });
    console.log("Names found: "+ (await listTeamNames).length);
    return listTeamNames;
  }

  async findMany(): Promise<Team[]> {
    const rows = this.service.getDbHandle().team.findMany();
    console.log("Rows found: "+ (await rows).length);
    return rows;
  }
}