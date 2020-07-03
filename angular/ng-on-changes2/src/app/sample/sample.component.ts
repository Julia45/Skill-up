import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  nameValue: string
  counter = 0

  constructor() { }

  ngOnInit(): void {
  }

  private getTimeString = (): string => {
    const d = new Date();
    return `name-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}`
  }

  changeName() {
    this.nameValue = this.getTimeString()
  }

  changeValue () {
    this.counter++
  }

  changeBoth() {
    this.changeName();
    this.counter++
  }

}
