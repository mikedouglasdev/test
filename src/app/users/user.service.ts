import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  url = 'https://ng6users-api-dev.azurewebsites.net/api/users';
  getUsers() {
    return this
            .http
            .get(`${this.url}`);
        }
}