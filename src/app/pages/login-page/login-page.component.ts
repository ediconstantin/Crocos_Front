import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as STATUS from 'http-status-codes';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { SessionStorage } from 'angular-web-storage';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private messageService: MessageService
  ) { }

  // O sa fie scoasa asta de aici
  err = {
    status: ''
  };

  user = {
    email: '',
    password: ''
  };

  @SessionStorage('user_token') userToken = '';
  ngOnInit() {
  }

  doLogin(username, password) {
    // De apelat serviciul de login, meanwhile
    if (username === 'admin') {
      this.router.navigate(['/admin']);
    } else if (username === 'user') {
      this.router.navigate(['/home']);
    } else if (this.err instanceof HttpErrorResponse) {
      switch (this.err.status) {
        case STATUS.UNAUTHORIZED:
          this.errorUnauthorized();
          break;
        case STATUS.FORBIDDEN:
          this.errorForbidden();
          break;
        case STATUS.BAD_REQUEST:
          this.errorRequest();
          break;
      }
    } else {
      this.errorUnauthorized();
    }
  }

  errorUnauthorized() {
    this.messageService.add({
      severity: 'error',
      summary: 'You\'ve enetered a wrong email or password! Please check the credentials and try again'
    });
  }

  errorForbidden() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Access forbidden'
    });
  }

  errorRequest() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Please complete the the email and passwords fiedls below!'
    });
  }
}
