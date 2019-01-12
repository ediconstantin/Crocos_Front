import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SessionStorage } from 'angular-web-storage';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/components/common/selectitem';

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
          if (this.selectedUser === 'user') {
            this.router.navigate(['/user-profile']);
          } else if (this.selectedUser === 'admin') {
            this.router.navigate(['/admin-profile']);
          }
        }
      },
      {
        label: 'Logout',
        command: () => {
          this.router.navigate(['/']);
        }
        // command: () => {
        //   this.userService.logout(this.userToken).subscribe(() => {
        //     this.userToken = '';
        //     this.router.navigate(['/']);
        //   }, () => {
        //     this.userToken = '';
        //     this.router.navigate(['/']);
        //   });
        // }
      }]
    }];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  @SessionStorage('user_token') userToken;
  ngOnInit() {

  }

}