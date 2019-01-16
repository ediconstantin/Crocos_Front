import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnInit {

  tabItems: MenuItem[] = [
    {
      label: 'First Year - Quizzes'
    },
    {
      label: 'Second Year - Quizzes'
    },
    {
      label: 'Third Year - Quizzes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
