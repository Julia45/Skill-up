import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.scss']
})
export class Counter3Component implements OnInit {

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
