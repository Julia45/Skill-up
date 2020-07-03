import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  styles: any =  {
    'background-color': "yellow",
    color: "#000000",
    border: "2px solid red",
    "border-radius": "7px",
    margin: "20px 0",
    padding: "20px"

  }

  isHighlighted = false

  constructor() { }

  ngOnInit(): void {
  }

  getStyles () {
    let newStyle: any;
    newStyle = Object.assign({}, this.styles, {
      ['background-color']: "#df6303",
      ['color']: "#ffffff",
      ['border']: "4px solid orange",
      ['min-height.px']: 150
    });

    return newStyle

  }


}
