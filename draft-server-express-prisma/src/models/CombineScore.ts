export class CombineScore {

  id: number;
  fortyTime: number;
  tenYardSplit: number;
  twentyYard_shuttle: number;
  threeCone: number;
  verticalLeap: number;
  broadJump: number;
  playerId: number;

  constructor(fortyTime: number, tenYardSplit: number, 
    twentyYard_shuttle: number, threeCone: number, 
    verticalLeap: number, playerId: number, broadJump: number  ) {
      this.fortyTime = fortyTime;
      this.tenYardSplit = tenYardSplit;
      this.twentyYard_shuttle = twentyYard_shuttle;
      this.threeCone = threeCone;
      this.verticalLeap = verticalLeap;
      this.playerId = playerId;
      this.broadJump = broadJump;
    }
}
