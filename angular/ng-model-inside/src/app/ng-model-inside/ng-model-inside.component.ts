import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-inside',
  templateUrl: './ng-model-inside.component.html',
  styleUrls: ['./ng-model-inside.component.scss']
})
export class NgModelInsideComponent implements OnInit {

  currentValue: string

  constructor() { 
    this.currentValue = " ffd"
  }

  ngOnInit(): void {
  }

}
