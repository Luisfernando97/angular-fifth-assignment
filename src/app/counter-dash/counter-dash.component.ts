import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-dash',
  templateUrl: './counter-dash.component.html',
  styleUrls: ['./counter-dash.component.css']
})
export class CounterDashComponent implements OnInit {

  private counter = [];

  constructor(private counterService: CounterService) {
    this.counterService.counterUpdated.subscribe(
      () => this.counter = this.counterService.counter
    );
   }

  ngOnInit() {
    this.counter = this.counterService.counter;
  }

}
