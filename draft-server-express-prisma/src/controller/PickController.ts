import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Pick } from "../models/Pick";

export class PickController {
  private pickRepository = AppDataSource.getRepository(Pick);

  async all(request: Request, response: Response, next: NextFunction) {
    const pickList = this.pickRepository.find();
    let i = 0;
    while (i < (await pickList).length) {
      console.log("picklist = " + pickList[i]);
    }
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    const pick = await this.pickRepository.findOne({
      where: { id },
    });

    if (!pick) {
      return "unregistered pick";
    }
    return pick;
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const {
      id,
      teamId,
      playerId,
      selectionRound,
      selectionNumber,
      selectionYear,
      selectionPickFrom,
      selectionPickTo,
      combineScore,
    } = request.body;

    const pick = Object.assign(new Pick(), {
      id,
      teamId,
      playerId,
      selectionRound,
      selectionNumber,
      selectionYear,
      selectionPickFrom,
      selectionPickTo,
      combineScore,
    });

    return this.pickRepository.save(pick);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    let pickToRemove = await this.pickRepository.findOneBy({ id });

    if (!pickToRemove) {
      return "this pick not exist";
    }

    await this.pickRepository.remove(pickToRemove);

    return "pick has been removed";
  }
}
