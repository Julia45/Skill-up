import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() personName = "Host";
  @Input() personAge = 25;
  @Input('step') personAgeStep = 1;

  constructor() { }

  ngOnInit(): void {
  }

  increment () {
    this.personAge += this.personAgeStep
  }

  decrement () {
    this.personAge -= this.personAgeStep
  }

}
