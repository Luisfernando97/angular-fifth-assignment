import { EventEmitter } from '@angular/core';

export class CounterService {

  counter = [0, 0];
  // Position 0 => Active to Inactive
  // Position 1 => Inactive to Active

  // Tells the counter dash to update the values
  counterUpdated = new EventEmitter();

  // Used by the counter dash component on init
  getCounterData() {
    return this.counter;
  }

  // called by the setTo() function on the UsersService
  incrementCounter(active: boolean) {
    // If active, increment counter[1], if not, increment counter[0]
    if (active) {
      this.counter[1]++;
    } else {
      this.counter[0]++;
    }
    this.counterUpdated.emit();
  }

}
