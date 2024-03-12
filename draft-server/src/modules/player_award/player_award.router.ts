import express from "express";
import type { Request, Response } from "express";
import { PlayerAwardService } from "./player_award.service";


const playerawardService = new PlayerAwardService();
export const playerAwardRouter = express.Router();


// Create a PlayerAward record
playerAwardRouter.post("/playeraward", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new PlayerAward: "+error.message);
  }
});
// Read list of all playerawards
playerAwardRouter.get("/playerawards", function (request: Request, response: Response) {
  try{
    getManyPlayerAwards(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of PlayerAward names: "+error.message);
  }
});
// Read PlayerAward by ID
playerAwardRouter.get("/playeraward/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up playeraward by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of PlayerAward names: "+error.message);
  }
});
// Update a PlayerAward record
playerAwardRouter.put("/playeraward/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating playeraward data: "+error.message);
  }
});
// Delete a PlayerAward record
playerAwardRouter.delete("/playeraward/:id", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting PlayerAward: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  console.log("In router, checking content of Request");
  console.log("name: "+req.body.name+", conf: "+req.body.conference);
  await playerawardService.create(req,res);
}

async function getManyPlayerAwards(res: Response) {  
  try{
    const playerawards = await playerawardService.readMany();
    res.status(200).json(playerawards);
    console.log("Nbr playerawards found: "+playerawards.length);
  }catch(error) {
    console.log("Failed to findMany (playerawards): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await playerawardService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find PlayerAward by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await playerawardService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of PlayerAward data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await playerawardService.delete(req,res);
}