import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  googleAuth(idToken) {
    const options = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'token': idToken
    });
    return this.http.post(`${API_PATH.USER_LOGIN}`, options);
  }

  logout(token: String) {
    return this.http.post(API_PATH.USER_LOGOUT, {});
  }
}
