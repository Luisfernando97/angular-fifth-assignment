import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

  constructor(private counterService: CounterService) {}

  // All the users are in this array, this should be similar to what you expect from a API.
  users = [
    {
      id: 1,
      name: 'Max',
      active: true
    },
    {
      id: 2,
      name: 'Anna',
      active: true
    },
    {
      id: 3,
      name: 'Chris',
      active: false
    },
    {
      id: 4,
      name: 'Manu',
      active: false
    }
  ];

  // You should subscribe to this event in order to know when to update your users.
  usersUpdated = new EventEmitter();
  // I did not inserted any variable because you can simply run the getUsers() function.

  // Receives a boolean and a number, the boolean (active or inactive) goes straight to the object.
  setTo(activeUser: boolean, id: number) {
    id --; // An array starts at zero, not one, this is why we subtract one.
    this.users[id].active = activeUser; // = active is the variable active.
    this.counterService.incrementCounter(activeUser);
    this.usersUpdated.emit(); // Emits the event usersUpdated so every component subscribed to it
    // will execute the code that updates the users, that way we do not need to call
  }

  // Returns active or inactive users depending on the activeUsers variable
  getUsers(activeUsers: boolean) {
    let usersToReturn = [];

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].active == activeUsers) { // If the user matches the activeUsers variable
        usersToReturn.push(this.users[i]); // it will add it to the array that will be returned later
      }
    }

    return usersToReturn;
  }

  addUser(userName: string) {
    let newUserId = this.users.length + 1;
    this.users.push({
      id: newUserId,
      name: userName,
      active: true
    });
    this.usersUpdated.emit();
  }

}
