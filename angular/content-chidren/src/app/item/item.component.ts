import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  count: number

  constructor() { }

  ngOnInit(): void {
  }

  increment(value: number): void {
    this.count = ++value
  }

}
