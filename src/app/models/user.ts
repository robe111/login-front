export class User {
  constructor(email = '', password = '', remaindMe = false) {
    this.email = email;
    this.password = password;
    this.remaindMe = remaindMe;
  }
  email: string;
  password: string;
  remaindMe?: boolean;
}
