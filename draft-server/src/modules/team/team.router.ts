import express from "express";
import type { Request, Response } from "express";
import {TeamService} from "./team.service";

const teamService = new TeamService();
export const teamRouter = express.Router();


// Create a Team record
teamRouter.post("/team", function (request: Request, response: Response) {
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
    console.log("Listing teams by name");
    getManyNames(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
// Read Team by ID
teamRouter.get("/team/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up team by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
// Read Team by Name
teamRouter.get("/team/name/:name", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up team by name");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Team names: "+error.message);
  }
});
// Update a Team record
teamRouter.put("/team/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating team data: "+error.message);
  }
});
// Delete a Team record
teamRouter.delete("/team/:id", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Team: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  console.log("In router, checking content of Request");
  console.log("name: "+req.body.name+", conf: "+req.body.conference);
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
async function getByName(req: Request, res: Response) {
  try{
    const entity = await teamService.readByName(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find Team by Name: "+req.params.name);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await teamService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find Team by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
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