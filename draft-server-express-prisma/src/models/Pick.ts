export class Pick {
  
  id: number;
  teamId: number;
  playerId: number;
  selectionRound: number;
  selectionNumber: number;
  selectionYear: string;
  selectionPickFrom: string;
  selectionPickTo: string;
  combineScore: number;

  constructor(playerId: number, selectionRound: number, selectionNumber: number, 
    selectionYear: string, selectionPickFrom: string, selectionPickTo: string,combineScore: number) {
      this.playerId = playerId;
      this.selectionNumber = selectionNumber;
      this.selectionPickFrom = selectionPickFrom;
      this.selectionPickTo = selectionPickTo;
      this.selectionRound = selectionRound;
      this.selectionYear = selectionYear;
      this.combineScore = combineScore;
  }
}
