import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MENU_ITEMS } from '../../models/STATIC_MENU_ITEMS';
import { MenuItem } from 'primeng/components/common/menuitem';


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

  // De schimbat atunci cand se adauga children components
  createQuiz() {
    this.router.navigate(['admin/quiz']);
  }

  quizList() {
    this.router.navigate(['admin/quiz-list']);
  }
}
