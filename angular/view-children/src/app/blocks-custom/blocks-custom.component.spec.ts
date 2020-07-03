import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksCustomComponent } from './blocks-custom.component';

describe('BlocksCustomComponent', () => {
  let component: BlocksCustomComponent;
  let fixture: ComponentFixture<BlocksCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
