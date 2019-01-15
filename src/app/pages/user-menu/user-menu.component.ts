import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  publicTests() {
    this.router.navigate(['student/tests']);
  }

  enterCode() {
    this.router.navigate(['student/enterTest']);
  }

}
