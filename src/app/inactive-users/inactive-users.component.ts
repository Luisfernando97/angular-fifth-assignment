import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) {
    this.userService.usersUpdated.subscribe(
      () => this.users = this.userService.getUsers(false)
    );
  }

  ngOnInit() {
    this.users = this.userService.getUsers(false); // false for inactive users
  }

  onSetToActive(id: number) {
    this.userService.setTo(true, id);
    // this.userService.usersUpdated.emit();
  }
}
