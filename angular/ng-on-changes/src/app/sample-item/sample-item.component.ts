import { Component, OnInit, Input, ngOnChanges } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit, ngOnChanges {

  @Input () value: string

  constructor() { }

  ngOnInit(): void {
  }
  
 
  ngOnChanges () {
    console.log(`"${this.value}"`)
  }



}
