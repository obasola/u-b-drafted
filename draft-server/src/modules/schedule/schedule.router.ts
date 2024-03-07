import express from "express";
import type { Request, Response } from "express";
import {ScheduleService} from "./schedule.service";

const scheduleService = new ScheduleService();
export const scheduleRouter = express.Router();


// Create a Schedule record
scheduleRouter.post("/schedule/new", function (request: Request, response: Response) {
  try{
    addData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error creating new Schedule: "+error.message);
  }
});
// Read list of all schedules
scheduleRouter.get("/schedules", function (request: Request, response: Response) {
  try{
    getManySchedules(response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Schedule names: "+error.message);
  }
});
// Read Schedule by ID
scheduleRouter.get("/schedule/:id", function (request: Request, response: Response) {
  try{
    console.log("2. Looking up schedule by id");
    getUnique(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error reading list of Schedule names: "+error.message);
  }
});
// Update a Schedule record
scheduleRouter.put("/schedule/:id", function (request: Request, response: Response) {
  try{
    modifyData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error updating schedule data: "+error.message);
  }
});
// Delete a Schedule record
scheduleRouter.delete("/schedule/:id", function (request: Request, response: Response) {
  try{
    discardData(request, response);
  }catch(error: any) {
    return response.status(500)
                   .json("Error deleting Schedule: "+error.message);
  }
});
// ******************  Called Functions *****************
async function addData(req: Request, res: Response) {
  await scheduleService.create(req,res);
}
async function getManySchedules(res: Response) {  
  try{
    const schedules = await scheduleService.readMany();
    res.status(200).json(schedules);
    console.log("Nbr schedules found: "+schedules.length);
  }catch(error) {
    console.log("Failed to findMany (schedules): "+ error);
  }
}
async function getUnique(req: Request, res: Response) {
  try{
    const entity = await scheduleService.readOne(req,res);
    if(entity) {
      console.log("Got result back: "+entity);
      return res.status(200).json(entity);
    }else{
      return res.status(404).json("Could not find Schedule by Id: "+req.params.id);
    }
    
  }catch(error: any) {
    console.log("Houston, we have a problem...");
    return res.status(500).json(error.message);
  }
}
async function modifyData(req: Request, res: Response) {
  try{
    const result = await scheduleService.update(req, res);
    console.log("call results: "+result);
  }catch(error) {
    console.log("Error on update of Schedule data: "+error);
  }
}
async function discardData(req: Request, res: Response) {
  await scheduleService.delete(req,res);
}