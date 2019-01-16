import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QUIZ_FORM_STATE } from '../../models/QUIZ_FORM_STATE';
import { Observable } from 'rxjs';
import { Quiz } from '../../models/QUIZ';
import { QuizService } from '../../services/quiz-service.service';
import { Message } from 'primeng/api';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  STATE: QUIZ_FORM_STATE;
  STATES = QUIZ_FORM_STATE;
  testId: Number;
  quizId: Number;
  errorMsgs: Message[];
  questions: Boolean = false;
  categories: SelectItem[];
  correctAnswer: SelectItem[];
  quizPageModel = {
    name: '',
    description: '',
    duration: null,
    questionsNumber: '',
    retries: null,
    isPublic: 0,
    feedback: 0,
    backwards: 0,
    categoryId: 1
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.STATE = this.route.snapshot.data.mode;
  }

  addQuestions() {
    this.router.navigate(['admin/addQuestion']);
  }

  cancelQuiz() {
    history.go(-1);
  }

  deleteQuiz() {
    this.quizService.removeTest(this.testId).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  saveQuiz() {
    const quiz = this.quizPageModel;

    let saveFnc: (quiz: Quiz) => Observable<Object>;

    switch (this.STATE) {
      case QUIZ_FORM_STATE.NEW:
        saveFnc = this.quizService.createTest;
        break;
    }

    saveFnc(quiz).subscribe((res: Quiz) => {
      console.log(res);
      history.go(-1);
    }, err => {
      console.log(err);
    });
  }

  backwardConfirmation(e, value) {
    if (e.target.checked) {
      this.quizPageModel.backwards = e.target.value;
    } else {
      this.quizPageModel.backwards = 0;
    }
  }
}
