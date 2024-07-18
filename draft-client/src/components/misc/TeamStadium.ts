export default interface StadiumInfo {
  id: number;
  name: string;
  city: string;
  state: string;  
  conference: string;
  division: string;
  stadium: string;
}

export default class TeamStadium implements StadiumInfo {
    
    constructor(
      public id: number,
      public name: string,
      public city: string,
      public state: string,
      public conference: string,
      public division: string,
      public stadium: string
    ) {}

    
  }