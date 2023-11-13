import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly URL_API = 'http://localhost:3000/api/users';

  constructor() {}

  getUser() {
    //return this.http.get(this.URL_API);
  }
}
