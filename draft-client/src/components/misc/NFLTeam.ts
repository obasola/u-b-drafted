export default interface StadiumInfo {
  city: string;
  state: string;
  stadium: string;
}

export default class NFLTeam implements StadiumInfo {
    
    constructor(
      public city: string,
      public state: string,
      public stadium: string
    ) {}

    
  }