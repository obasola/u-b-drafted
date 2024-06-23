export default interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
}
export default interface Pick {
  id: number;
  teamId: number;
  playerId: number;
  player: string;
  selectionRound: number;
  selectionNumber: number;
  selectionYear: string;
  selectionPickFrom: string;
  selectionPickTo: string;
  combineScore: number;
}
export default interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  handSize: number;
  armLength: number;
  homeCity: string;
  homeState: string;
  university: string;
  year_entered_league: string,
  pickId: number;
  position: string;
  
}
export default interface PlayerAward {
    id: number;
    playerId: number;
    award_name: string;
    year_awarded: number;

  }

export default interface CombineScore {
  id: number;
  fortyTime: number;
  tenYardSplit: number;
  twentyYard_shuttle: number;
  threeCone: number;
  verticalLeap: number;
  broadJump: number;
  playerId: number;
}

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

export default interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
}
