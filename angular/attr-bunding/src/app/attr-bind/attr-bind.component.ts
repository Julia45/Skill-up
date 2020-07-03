import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-bind',
  templateUrl: './attr-bind.component.html',
  styleUrls: ['./attr-bind.component.scss']
})
export class AttrBindComponent implements OnInit {

  value = 100

  constructor() { }

  ngOnInit(): void {
  }

  increaseSize() {
    this.value++
  }

  decreaseSize() {
    this.value--
  }

}
