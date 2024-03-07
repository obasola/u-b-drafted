import express from "express";
import type { Request, Response } from "express";
import {PersonService} from "./user.service";

const personService = new PersonService();
export const personRouter = express.Router();


// Create a Person record
personRouter.post("/person/new", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new Person: "+error.message);
  }
});
// Read list of all persons
personRouter.get("/persons", function (request: Request, response: Response) {
  try{
    getManyPersons(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Person names: "+error.message);
  }
});
// Read Person by ID
personRouter.get("/person/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up person by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Person names: "+error.message);
  }
});
// Update a Person record
personRouter.put("/person/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating person data: "+error.message);
  }
});
// Delete a Person record
personRouter.delete("/person/del", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Person: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  await personService.create(req,res);
}
async function getManyPersons(res: Response) {  
  try{
    const persons = await personService.readMany();
    res.status(200).json(persons);
    console.log("Nbr persons found: "+persons.length);
  }catch(error) {
    console.log("Failed to findMany (persons): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await personService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find Person by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await personService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Person data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await personService.delete(req,res);
}