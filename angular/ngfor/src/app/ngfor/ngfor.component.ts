import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  items: string[] = []

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      this.items[i] = `Элемент списка #${i + 1}`
    }
  }

}
