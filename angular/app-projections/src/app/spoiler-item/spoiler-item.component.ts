import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spoiler-item',
  templateUrl: './spoiler-item.component.html',
  styleUrls: ['./spoiler-item.component.scss']
})
export class SpoilerItemComponent implements OnInit {

  @Input() header: string;
  @Input() isVisible = false

  constructor() { }

  ngOnInit(): void {
  }

  showHide () {
    this.isVisible = !this.isVisible
  }

}
