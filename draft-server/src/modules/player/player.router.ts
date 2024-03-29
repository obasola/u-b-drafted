import express from "express";
import type { Request, Response } from "express";
import {PlayerService} from "./player.service";

const playerService = new PlayerService();
export const playerRouter = express.Router();


// Create a Player record
playerRouter.post("/player", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new Player: "+error.message);
  }
});
// Read list of all players
playerRouter.get("/players", function (request: Request, response: Response) {
  try{
    getManyPlayers(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Player names: "+error.message);
  }
});
// Read Player by ID
playerRouter.get("/player/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up player by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Player names: "+error.message);
  }
});
// Update a Player record
playerRouter.put("/player/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating player data: "+error.message);
  }
});
// Delete a Player record
playerRouter.delete("/player/:id", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Player: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  console.log("In router, checking content of Request");
  console.log("name: "+req.body.name+", conf: "+req.body.conference);
  await playerService.create(req,res);
}

async function getManyPlayers(res: Response) {  
  try{
    const players = await playerService.readMany();
    res.status(200).json(players);
    console.log("Nbr players found: "+players.length);
  }catch(error) {
    console.log("Failed to findMany (players): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await playerService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find Player by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await playerService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Player data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await playerService.delete(req,res);
}