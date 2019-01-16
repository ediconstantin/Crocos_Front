import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from '../models/API_PATH';
import { QuestionModel } from '../models/QUESTION';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestion(questionId: Number) {
    return this.http.get(`${API_PATH.QUESTION}/${questionId}`);
  }

  // Get Question?

  createQuestion(question: QuestionModel) {
    return this.http.post(API_PATH.QUESTION_CREATE, question);
  }

  updateQuestion(question: QuestionModel) {
    // what
  }

  deleteQuestion(questionId: Number) {
    return this.http.delete(`${API_PATH.QUESTION_DELETE}/${questionId}`);
  }
}
