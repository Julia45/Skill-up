import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit, OnChanges {

  @Input () name: string
  @Input () value: number


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange}) {

    const mssgArray: string[] = []

    for(const propName in changes) {
      mssgArray.push(`Свойство "${propName}",\n\tтекущее значение = ${changes[propName].currentValue},
      \n\tпредыдущее значение = ${changes[propName].previousValue}`)

    }
    console.log(mssgArray.join('\n'))

  }

}
