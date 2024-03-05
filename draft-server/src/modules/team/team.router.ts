import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import {TeamService} from "./team.service";

const teamService = new TeamService();
export const teamRouter = express.Router();

// GET list of all team names
teamRouter.get("/teams", function (request: Request, response: Response) {
  try{
    getManyTeams(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
// GET list of all teams
teamRouter.put("/team/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating team data: "+error.message);
  }
});

// GET list of all teams
teamRouter.get("/team/names", function (request: Request, response: Response) {
  try{
    getManyNames(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});

// ******************  Called Functions *****************
async function getManyNames(res: Response) {  
  const teamNames = await teamService.findManyNames();
  res.status(200).json(teamNames);
  console.log("Nbr team names found: "+teamNames.length);
}
async function getManyTeams(res: Response) {  
  try{
    const teams = await teamService.findMany();
    res.status(200).json(teams);
    console.log("Nbr teams found: "+teams.length);
  }catch(error) {
    console.log("Failed to findMany (teams): "+ error);
  }
}

async function modifyData(req: Request, res: Response) {
  try{
    const result = await teamService.modifyTeamData(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Team data: "+error);
  }
}