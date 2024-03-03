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
teamRouter.get("/team/names", function (request: Request, response: Response) {
  try{
    getManyNames(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
async function getManyNames(res: Response) {  
  const teamNames = await teamService.findManyNames();
  res.status(200).json(teamNames);
}
async function getManyTeams(res: Response) {  
  try{
    const teamNames = await teamService.findMany();
    res.status(200).json(teamNames);
  }catch(error) {
    console.log("Failed to findMany (teams): "+ error);
  }
}