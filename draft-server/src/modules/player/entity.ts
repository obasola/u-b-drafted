export class Player {
  id: number = 0;
  firstName: string;
  lastName: string;
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  handSize: number = 0;
  armLength: number = 0;
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
