import Team from "./Team";

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
    year_entered_league: number,
    pickId: number;
    position: string;
    Team: Team;    
  }