import express from "express";
import type { Request, Response } from "express";
import { PlayerAwardService } from "./playerAward.service";


const playerAwardService = new PlayerAwardService();
export const playerAwardRouter = express.Router();


// Create a PlayerAward record
playerAwardRouter.post("/playerAward", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new PlayerAward: "+error.message);
  }
});
// Read list of all playerAward
playerAwardRouter.get("/playerAwards", function (request: Request, response: Response) {
  try{
    getManyPlayerAwards(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of PlayerAward names: "+error.message);
  }
});
// Read PlayerAwards by ID
playerAwardRouter.get("/playerAwards/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up playerAward by id");
    let id = parseInt(request.params.id, 10);
    getManyPlayerAwardsById(id, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of PlayerAward names: "+error.message);
  }
});
// Update a PlayerAward record
playerAwardRouter.put("/playerAward/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating playeraward data: "+error.message);
  }
});
// Delete a PlayerAward record
playerAwardRouter.delete("/playerAward/:id", function (request: Request, response: Response) {
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
  await playerAwardService.create(req,res);
}

async function getManyPlayerAwards(res: Response) {  
  try{
    const playerAwards = await playerAwardService.readMany();
    res.status(200).json(playerAwards);
    console.log("Nbr playerawards found: "+playerAwards.length);
  }catch(error) {
    console.log("Failed to findMany (playerawards): "+ error);
  }
}

async function getManyPlayerAwardsById(id: number, res: Response) {  
  try{
    const playerAwards = await playerAwardService.readManyById(id, res);
    res.status(200).json(playerAwards);
    console.log("Nbr playerawards found: "+playerAwards.length);
  }catch(error) {
    console.log("Failed to findMany (playerawards): "+ error);
  }
}

async function getUnique(req: Request, res: Response) {
  try{
    const entity = await playerAwardService.readOne(req,res);
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
    const result = await playerAwardService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of PlayerAward data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await playerAwardService.delete(req,res);
}