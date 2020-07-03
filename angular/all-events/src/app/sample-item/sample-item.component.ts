import { AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
   OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy, AfterContentChecked   {

  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngOnInit() {
    console.log('OnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

  private testHandler() {
    console.log('Сработало')
  }

}
