export class Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;

  constructor(name: string, city: string, state: string, conference: string) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.conference = conference;
  }
}
