import { Injectable } from '@angular/core';
import { API_PATH } from '../models/API_PATH';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Quiz } from '../models/QUIZ';
import { QuizUpdate } from '../models/QUIZ_UPDATE';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  _getAll = () => {
    return this.http.get(`${API_PATH.QUIZ_TEST}`);
  }

  getAll(testIds?: Number[]) {
    if (testIds && Array.isArray(testIds)) {
      const filter = {
        where: {
          id: {
            inq: testIds
          }
        }
      };
      const httpOptions = { params: new HttpParams().set('filter', JSON.stringify(filter)) };
      return this.http.get(API_PATH.QUIZ_TEST, httpOptions);
    } else {
      return this._getAll();
    }
  }

  getTestById(testId: Number) {
    return this.getAll([testId]).map(tests => tests[0]);
  }

  createTest = (quiz: Quiz) => {
    return this.http.post(API_PATH.QUIZ_TEST, quiz);
  }

  cloneQuiz(cloneTestId: Number) {
    return this.http.post(API_PATH.QUIZ_CLONE, cloneTestId);
  }

  updateTest(body: QuizUpdate) {
    return this.http.put(API_PATH.QUIZ_UPDATE, body);
  }

  removeTest(testId: Number) {
    return this.http.delete(`${API_PATH.QUIZ_DELETE}/${testId}`);
  }

  removeTestQuestion(testId: Number, questionId) {
    return this.http.delete(`${API_PATH.QUIZ_QUESTION_DELETE}/${testId}`, questionId);
  }
}
