import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admintest, Adminquestion } from '../../models/ADMINTEST';

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
  ) {
    this.testsAttended = [
      {
        title: 'Tehnologii Web - Test 1',
        duration: '30',
        public: 'No',
        questions: '30'
      },
      {
        title: 'Tehnologii Web - Test 2',
        duration: '10',
        public: 'No',
        questions: '30'
      },
      {
        title: 'Tehnologii Web - Test 3',
        duration: '30',
        public: 'No',
        questions: '15'
      },
      {
        title: 'Tehnologii Web - Test 4',
        duration: '15',
        public: 'No',
        questions: '15'
      },
      {
        title: 'Tehnologii Web - Test 5',
        duration: '30',
        public: 'No',
        questions: '30'
      },
      {
        title: 'Tehnologii Web - Test 6',
        duration: '30',
        public: 'Yes',
        questions: '30'
      },
      {
        title: 'Tehnologii Web - Test 7',
        duration: '30',
        public: 'Yes',
        questions: '30'
      },
    ];

    this.questions = [
      {
        title: 'What is a private class?',
        multiple: 'No'
      },
      {
        title: 'Which of these are Web Application frameworks?',
        multiple: 'No'
      },
      {
        title: 'Which ones are the req parameters?',
        multiple: 'Yes'
      },
      {
        title: 'How many interfaces can you initialize in a model file',
        multiple: 'Yes'
      },
      {
        title: 'Which of the following are false',
        multiple: 'Yes'
      },
      {
        title: 'Which of the following are true?',
        multiple: 'Yes'
      },
    ];
  }

  firstname: String;
  lastname: String;
  email: String;
  users: any[];
  user: any;
  userId = this.route.snapshot.params['id'];
  testsAttended: Admintest[];
  questions: Adminquestion[];

  ngOnInit() {
    this.getAllUsers();
    this.firstname = 'Dan Andrei';
    this.lastname = 'Ghinea';
    this.email = 'ghineadan16@stud.ase.ro';
  }

  getAllUsers() {
    this.users = [];
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    }, (err) => {
      console.log(err);
    });
  }

  studentGrades() {
    this.router.navigate(['admin/grades']);
  }

  studentStatistics() {
    this.router.navigate(['admin/statistics']);
  }
}
