import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngnodel',
  templateUrl: './ngnodel.component.html',
  styleUrls: ['./ngnodel.component.scss']
})
export class NgnodelComponent implements OnInit {

  xValue = 0
  yValue = 0 
  result: number 

  constructor() { }

  ngOnInit(): void {
  }

  calculate () {
    this.result = +this.xValue + +this.yValue
  }

  reset () {
    this.xValue = this.yValue = 0
    this.calculate()
  }

}
