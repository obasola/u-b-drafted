export class Person {
    id: number =0;
    userName: string;
    emailAddress: string;
    password: string;
    firstName: string;
    lastName: string;
  
    constructor(userName: string, emailAddress: string, password: string, firstName: string, lastName: string) {
      this.userName = userName;
      this.emailAddress = emailAddress;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }