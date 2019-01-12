import { Injectable } from '@angular/core';
import { API_PATH } from '../models/API_PATH';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  _getAll = () => {
    return this.http.get(`${API_PATH.QUIZ_TEST}/public/1`);
  }
}
