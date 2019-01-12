import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as STATUS from 'http-status-codes';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  user = {
    email: '',
    password: ''
  };

  @SessionStorage('user_token') userToken = '';
  ngOnInit() {
  }

  doLogin(username, password) {

  }
}
