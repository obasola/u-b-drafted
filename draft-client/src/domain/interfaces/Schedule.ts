export default interface Schedule {
    id: number;
    teamID: number;
    opponentId: number;
    scheduleWeek: number;
    gameDate: Date;
    gameCity: string;
    gameStateProvince: TemplateStringsArray;
    gameCountry: string;
    gameLocation: string;
    opponentConference: string;
    opponentDivision: string;
    winLostFlag: string;
    homeOrAway: string;
  }