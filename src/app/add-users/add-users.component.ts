import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  private newUserName: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  // Called when you click on the "Add a new user" button
  onAddUser() {
    this.userService.addUser(this.newUserName); // Calls the addUser function from the userService
    this.newUserName = ''; // this is just for looks
  }

}
