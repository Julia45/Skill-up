import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  isHighlighted = false

  constructor() { }

  ngOnInit(): void {
  }

  getDivColor() {
    return "red"
  }

}
