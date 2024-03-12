import express from "express";
import type { Request, Response } from "express";
import {CombineService} from "./combine.service";

const combineService = new CombineService();
export const combineRouter = express.Router();


// Create a Combine record
combineRouter.post("/combine/new", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new Combine: "+error.message);
  }
});
// Read list of all combines
combineRouter.get("/combines", function (request: Request, response: Response) {
  try{
    getMany(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Combine names: "+error.message);
  }
});
// Read Combine by ID
combineRouter.get("/combine/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up combine by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Combine names: "+error.message);
  }
});
// Update a Combine record
combineRouter.put("/combine/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating combine data: "+error.message);
  }
});
// Delete a Combine record
combineRouter.delete("/combine/:id", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Combine: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  await combineService.create(req,res);
}
async function getMany(res: Response) {  
  try{
    const combines = await combineService.readMany();
    res.status(200).json(combines);
    console.log("Nbr combines found: "+combines.length);
  }catch(error) {
    console.log("Failed to findMany (combines): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await combineService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find Combine by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await combineService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Combine data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await combineService.delete(req,res);
}