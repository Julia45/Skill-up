import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss'],
  providers : [CounterServiceService]
})
export class Counter1Component implements OnInit {

  counter = 0

  constructor() {private svc: CounterServiceService }

  // ngOnInit(): void {
  // }

  inc () {
    this.svc.increment();
    this.counter = this.svc.getValue()
  }

  dec () {
    this.svc.decrement();
    this.counter = this.svc.getValue()
  }

}
