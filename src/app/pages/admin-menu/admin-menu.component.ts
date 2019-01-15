import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  createQuiz() {
    this.router.navigate(['admin/quiz']);
  }

  quizList() {
    this.router.navigate(['admin/quiz-list']);
  }

  sessionsList() {
    this.router.navigate(['admin/sessions']);
  }

  adminStatistics() {
    this.router.navigate(['admin/statistics']);
  }
}
