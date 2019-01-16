import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorage } from 'angular-web-storage';
import { MessageService } from 'primeng/api';
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
    private messageService: MessageService,
    ngZone: NgZone
  ) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  @SessionStorage('token') token = '';
  ngOnInit() {
  }


  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    this.token = googleUser.getAuthResponse().id_token;

    this.loginService.googleAuth(this.token).subscribe(res => {
      console.log(res);
      this.token = res.token;
      if (res.isProf === true) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['student']);
      }
    }, err => {
      console.log(err);
    });
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
