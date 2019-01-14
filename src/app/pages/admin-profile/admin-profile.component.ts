import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserProfileService
  ) { }

  users: any[];
  user: any;
  userId = this.route.snapshot.params['id'];

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = [];
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    }, (err) => {
      console.log(err);
    });
  }
}
