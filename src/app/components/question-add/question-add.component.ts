import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { QuestionService } from '../../services/question-service.service';
import { Question } from 'src/app/models/QUESTION';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss']
})
export class QuestionAddComponent implements OnInit {
  openQuiz: Boolean = false;
  categories: SelectItem[];
  correctAnswer: SelectItem[];
  questionPageModel = {
    question: 'test',
    ans1: 'test',
    ans2: 'test',
    ans3: 'test',
    ans4: 'test',
    correct: 'ans2',
    open: false,
    category_id: 1,
    feedback: 'Testing stuff around',
    photo: '',
    multiple: false,
    duration: 10
  };

  constructor(
    private router: Router,
    private questionService: QuestionService
    ) {
    this.categories = [
      {
        label: 'Retele de Calulcatoare',
        value: 2
      },
      {
        label: 'Programare Orientata Obiect',
        value: 1
      }
    ];
    this.correctAnswer = [
      {
        label: 'Answer 1',
        value: 'ans1'
      },
      {
        label: 'Answer 2',
        value: 'ans2'
      },
      {
        label: 'Answer 3',
        value: 'ans3'
      },
      {
        label: 'Answer 4',
        value: 'ans4'
      }
    ];
   }

  ngOnInit() {
  }

  openCheck() {
    this.openQuiz = !this.openQuiz;
    return;
  }

  saveQuestion() {
    const question = this.questionPageModel;
    console.log(this.questionPageModel);
    this.questionService.createQuestion(question).subscribe((res: Question) => {
      console.log(res);
      history.go(-1);
    }, err => {
      console.log(err);
    });
  }

  cancelQuestion() {
    this.router.navigate(['admin']);
  }

}
