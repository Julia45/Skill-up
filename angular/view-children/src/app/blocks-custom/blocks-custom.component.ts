import { Component, OnInit,QueryList, ViewChildren, ViewChild } from '@angular/core';
import { BlockItemComponent } from '../block-item/block-item.component'

@Component({
  selector: 'app-blocks-custom',
  templateUrl: './blocks-custom.component.html',
  styleUrls: ['./blocks-custom.component.scss']
})
export class BlocksCustomComponent implements OnInit {

  @ViewChildren(BlockItemComponent)
  private blocks: QueryList<BlockItemComponent>;

  @ViewChild('selected')
  private selectedBlock: BlockItemComponent

  constructor() { }

  ngOnInit(): void {
  }

  showSelectedBlock() {
    this.selectedBlock.show()
  }

  showAllBlocks () {
    this.blocks.forEach(block => block.show())
  }

}
