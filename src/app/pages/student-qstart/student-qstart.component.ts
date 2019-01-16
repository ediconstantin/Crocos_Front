import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-qstart',
  templateUrl: './student-qstart.component.html',
  styleUrls: ['./student-qstart.component.scss']
})
export class StudentQstartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    history.go(-1);
  }

}
