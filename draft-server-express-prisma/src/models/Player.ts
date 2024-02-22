export class Player {
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
  pickId: number;
  position: string;

  constructor(firstName: string, lastName: string, homeCity: string, homeState: string,
    university: string, position: string, pickId: number) {

      this.firstName = firstName;
      this.lastName = lastName;
      this.homeCity = homeCity;
      this.homeState = homeState;
      this.university = university;
      this.position = position;
      this.pickId = pickId;
  }
}
