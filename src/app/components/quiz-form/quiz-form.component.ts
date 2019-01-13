import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { API_PATH } from '../../models/API_PATH';
import { QUIZ_FORM_STATE } from '../../models/QUIZ_FORM_STATE';
import { Observable } from 'rxjs';
import { Quiz, QuizPageModel } from '../../models/QUIZ';
import { QuizService } from '../../services/quiz-service.service';
import { Message } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  STATE: QUIZ_FORM_STATE;
  STATES = QUIZ_FORM_STATE;
  quizId: Number;
  errorMsgs: Message[];
  pageModel: QuizPageModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.STATE = this.activatedRoute.snapshot.data.mode;
    console.log(this.STATE);
  }

  addNewQuestion() {

  }

  cancelQuiz() {
    // Sa dai cancel la formular
  }

  deleteQuiz() {
    // Sa fie facut serviciu de delete
  }

  saveQuiz() {
    // Sa salvam formularul
  }

}
