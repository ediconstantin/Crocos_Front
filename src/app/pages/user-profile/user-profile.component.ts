import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/TEST';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  testsAttended: Test[];

  constructor() {
    this.testsAttended = [
      {
        name: 'Retele - Test 2',
        grade: '7',
        teacher: 'Carmen Timofte'
      },
      {
        name: 'Android - Test 1',
        grade: '10',
        teacher: 'Paul Pocatilu'
      },
      {
        name: 'Retele - Test 1',
        grade: '7',
        teacher: 'Carmen Timofte'
      },
      {
        name: 'CTS - Proiect',
        grade: '9',
        teacher: 'Andreea Mirica'
      },
      {
        name: 'CTS - Test',
        grade: '10',
        teacher: 'Andreea Mirica'
      },
      {
        name: 'AD - Proiect',
        grade: '8',
        teacher: 'Furtuna Titus Felix'
      }
    ];
  }

  ngOnInit() {
  }

}
