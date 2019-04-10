import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) {
    this.userService.usersUpdated.subscribe(
      () => this.users = this.userService.getUsers(true)
    );
  }

  ngOnInit() {
    this.users = this.userService.getUsers(true); // true for active users
    console.log(this.users);
  }

  onSetToInactive(id: number) {
    this.userService.setTo(false, id);
    // this.userService.usersUpdated.emit();
  }
}
