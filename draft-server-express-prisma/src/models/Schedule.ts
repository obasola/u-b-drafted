export class Schedule {
  
  id: number;
  teamID: number;
  opponentId: number;
  scheduleWeek: number;
  gameDate: Date;
  gameCity: string;
  gameStateProvince: string;
  gameCountry: string;
  gameLocation: string;
  opponentConference: string;
  opponentDivision: string;
  winLostFlag: string;
  homeOrAway: string;

  constructor(teamID: number, opponentId: number, scheduleWeek: number, gameDate: Date, gameCity: string,
    gameStateProvince: string, gameCountry: string ) {
      this.teamID = teamID;
      this.opponentId = opponentId;
      this.scheduleWeek = scheduleWeek;
      this.gameDate = gameDate;
      this.gameCity = gameCity;
      this.gameStateProvince = gameStateProvince;
      this.gameCountry = gameCountry;
     
    }
}
