import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { API_PATH } from '../../models/API_PATH';
import { QUIZ_FORM_STATE } from '../../models/QUIZ_FORM_STATE';
import { Observable } from 'rxjs';
import { Quiz, QuizPageModel } from '../../models/Quiz';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.STATE = this.activatedRoute.snapshot.data.mode;
    console.log(this.STATE);
  }

}
