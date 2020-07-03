import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlockItemComponent } from '../block-item/block-item.component'

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @ViewChildren(BlockItemComponent)
  private blocks: QueryList<BlockItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  showAllBlocks () {
    this.blocks.forEach(block => block.show())
  }

}
