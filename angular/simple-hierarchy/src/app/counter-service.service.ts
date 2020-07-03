import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  private counter = 0

  constructor() { }

  increment () {
    this.counter++
  }

  decrement () {
    this.counter--
  }

  getValue () {
    return this.counter
  }
}
