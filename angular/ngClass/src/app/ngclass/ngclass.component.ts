import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  settings: any = {
    border: true,
    "border-dark": true,
    "bg-secondary": true,
    "text-light": true,
    rounded: true,
    "p-3": true,
    "mt-4": true
 }

 uncheckedClasses: any = {
  border: true,
  "border-danger": true,
  "bg-light": true,
  "text-dark": true,
  rounded: true,
  "p-3": true,
  "mt-4": true
}

checkedClasses: any = this.settings

  isChecked = false

  constructor() { }

  ngOnInit(): void {
  }

}
