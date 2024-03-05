import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import {TeamService} from "./team.service";

const teamService = new TeamService();
export const teamRouter = express.Router();


// Create a Team record
teamRouter.post("/team/new", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new Team: "+error.message);
  }
});
// Read list of all teams
teamRouter.get("/teams", function (request: Request, response: Response) {
  try{
    getManyTeams(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
// Read list of all teams
teamRouter.get("/team/names", function (request: Request, response: Response) {
  try{
    getManyNames(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
// Read unique Team
teamRouter.put("/team/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating team data: "+error.message);
  }
});
// Update a Team record
teamRouter.put("/team/update", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating Team: "+error.message);
  }
});
// Delete a Team record
teamRouter.delete("/team/del", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Team: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  await teamService.create(req,res);
}
async function getManyNames(res: Response) {  
  const teamNames = await teamService.readManyNames();
  res.status(200).json(teamNames);
  console.log("Nbr team names found: "+teamNames.length);
}
async function getManyTeams(res: Response) {  
  try{
    const teams = await teamService.readMany();
    res.status(200).json(teams);
    console.log("Nbr teams found: "+teams.length);
  }catch(error) {
    console.log("Failed to findMany (teams): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  return await teamService.readOne(req,res);
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await teamService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Team data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await teamService.delete(req,res);
}