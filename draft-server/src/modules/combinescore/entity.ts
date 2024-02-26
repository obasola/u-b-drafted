export class CombineScore {

    id: number= 0;
    fortyTime: number;
    tenYardSplit: number;
    twentyYardShuttle: number;
    threeCone: number;
    verticalLeap: number;
    broadJump: number;
    playerId: number;
  
    constructor(fortyTime: number, tenYardSplit: number, 
      twentyYardShuttle: number, threeCone: number, 
      verticalLeap: number, playerId: number, broadJump: number  ) {
        this.fortyTime = fortyTime;
        this.tenYardSplit = tenYardSplit;
        this.twentyYardShuttle = twentyYardShuttle;
        this.threeCone = threeCone;
        this.verticalLeap = verticalLeap;
        this.playerId = playerId;
        this.broadJump = broadJump;
      }
  }
  