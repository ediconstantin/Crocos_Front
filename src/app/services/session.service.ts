import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from '../models/API_PATH';
import { Session } from '../models/SESSION';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  options = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  getSessions = () => {
    return this.http.get(API_PATH.SESSIONS);
  }

  getSessionById(sessionId: Number) {
    return this.http.get(`${API_PATH.SESSIONS}/${sessionId}`);
  }

  getPublicSession(sessionCode: String) {
    return this.http.get(`${API_PATH.SESSIONS_PUBLIC}/${sessionCode}`);
  }

  createSession(session: Session) {
    return this.http.post(API_PATH.SESSIONS, session);
  }

  updateSession(sessionUpdate: Session) {
    return this.http.put(API_PATH.SESSIONS, sessionUpdate);
  }

  forceCloseSession(sessionId: Number) {
    return this.http.put(`${API_PATH.SESSIONS_CLOSE}/${sessionId}`, this.options);
  }
}
