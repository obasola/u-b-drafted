import express from "express";
import type { Request, Response } from "express";
import {PickService} from "./service";

const pickService = new PickService();
export const pickRouter = express.Router();


// Create a Pick record
pickRouter.post("/pick/new", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new Pick: "+error.message);
  }
});
// Read list of all picks
pickRouter.get("/picks", function (request: Request, response: Response) {
  try{
    getMany(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Pick names: "+error.message);
  }
});
// Read Pick by ID
pickRouter.get("/pick/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up pick by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Pick names: "+error.message);
  }
});
// Update a Pick record
pickRouter.put("/pick/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating pick data: "+error.message);
  }
});
// Delete a Pick record
pickRouter.delete("/pick/:id", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Pick: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  await pickService.create(req,res);
}
async function getMany(res: Response) {  
  try{
    const picks = await pickService.readMany();
    res.status(200);
    console.log("Nbr picks found: "+picks.length);
    return picks;
  }catch(error) {
    console.log("Failed to findMany (picks): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await pickService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      res.status(200);
      return entity;
    }else{
      return res.status(404).json("Could not find Pick by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await pickService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Pick data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await pickService.delete(req,res);
}