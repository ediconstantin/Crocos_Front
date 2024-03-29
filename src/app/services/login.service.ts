import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from '../models/API_PATH';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  googleAuth(idToken) {
    return this.http.post(API_PATH.USER_LOGIN, { token: idToken});
  }

  register(registerData) {
    return this.http.post(API_PATH.USER_REGISTER, registerData);
  }
}
