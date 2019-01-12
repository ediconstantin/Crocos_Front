import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from '../models/API_PATH';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password) {
    const body = {
      email: username,
      password: password
    };
    return this.http.post(API_PATH.USER_LOGIN, body);
  }

  logout(token: String) {
    return this.http.post(API_PATH.USER_LOGOUT, {});
  }
}
