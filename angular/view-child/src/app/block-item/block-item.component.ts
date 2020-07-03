import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.scss']
})
export class BlockItemComponent implements OnInit {

  visible = true

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.visible = !this.visible
  }

}
