import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SessionStorage } from 'angular-web-storage';
import { MenuItem } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedUser: String;
  selectUser: MenuItem[] = [
    {
      label: 'user',
      command: () => {
        this.selectedUser = 'user';
      }
    },
    {
      label: 'admin',
      command: () => {
        this.selectedUser = 'admin';
      }
    }
  ];

  accountMenuItems: MenuItem[] = [
    {
      label: '',
      icon: 'fa fa-user',
      items: [{
        label: 'Profile',
        command: () => {
            this.router.navigate(['admin/profile/3']);
          }
      },
      {
        label: 'Logout',
        command: () => {
          this.router.navigate(['/']);
        }
      }]
    }];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  @SessionStorage('user_token') userToken;
  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
