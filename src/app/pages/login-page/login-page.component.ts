import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as STATUS from 'http-status-codes';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { SessionStorage } from 'angular-web-storage';
import { LoginService } from '../../services/login.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private messageService: MessageService,
    ngZone: NgZone
  ) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  user = {
    email: '',
    password: ''
  };

  // O sa fie scoasa asta de aici
  err = {
    status: ''
  };

  @SessionStorage('user_token') idToken = '';
  ngOnInit() {
  }

  doLogin(username, password) {
    // De apelat serviciul de login, meanwhile
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/admin']);
    } else if (username === 'user' && password === 'user') {
      this.router.navigate(['/menu']);
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

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    this.idToken = googleUser.getAuthResponse().id_token;
    console.log(this.idToken);
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3015/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('token=' + this.idToken);
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
