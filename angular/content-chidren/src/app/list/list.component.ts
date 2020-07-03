import { AfterContentInit, Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  count = 0

  @ContentChildren(ItemComponent)
  items: QueryList<ItemComponent>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.count = this.items.length;
    this.items.forEach((item, i) => item.increment(i))

  }

}
