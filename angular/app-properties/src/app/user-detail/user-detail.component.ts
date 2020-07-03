import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {

  @Input() userFirstName: string;
  @Input() userLastName: string;
  private _userAge: number

  constructor() { }

  ngOnInit(): void {
  }

  get userAge () :number {
    return this._userAge
  }

  @Input()
  set userAge (value: number) {
    this._userAge = value
  }

  get userFullName (): string {
    return `${this.userFirstName} ${this.userLastName}`
  }

  @Input()
  set userFullName (value: string) {
    this.userFirstName = value.split(' ')[0];
    this.userLastName = value.split(' ')[1];

  }

}
