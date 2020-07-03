import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';


@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {

  counter = 0

  constructor() {private svc: CounterServiceService }

  ngOnInit(): void {
  }

  inc () {
    this.svc.increment();
    this.counter = this.svc.getValue()
  }

  dec () {
    this.svc.decrement();
    this.counter = this.svc.getValue()
  }

}
