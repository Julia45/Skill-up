import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  filledClassList = "bg-success border border-danger text-white rounded p-3";
  baseClassList = "p-3 border";
  currentClassList: string

  isBorder = true
  isBackground = true
  isTextHighlighted = true
  isRounded = true
  isPadding = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleClassList() {
    this.currentClassList = this.currentClassList === this.baseClassList
    ? this.filledClassList 
    : this.baseClassList

  }

  toggleBorder () {
    this.isBorder = !this.isBorder
  }

  toggleBackground () {
    this.isBackground = !this.isBackground
  }

  toggleTextHighlighted() {
    this.isTextHighlighted = !this.isTextHighlighted
  }

  toggleRounded () {
    this.isRounded = !this.isRounded
  }

  togglePadding () {
    this.isPadding = !this.isPadding
  }
}
