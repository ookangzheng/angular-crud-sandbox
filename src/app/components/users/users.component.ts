import { UserService } from '../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };

  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;
  showUserForm = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      // console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',
    //   image: 'https://loremflickr.com/320/240?random=4'
    // });
  }

  // addUser(user: User) {
  //   this.user.isActive = true;
  //   this.user.registered = new Date ();

  //   this.users.unshift(this.user);
  //   this.user = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   };
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is now valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }

  }


}
