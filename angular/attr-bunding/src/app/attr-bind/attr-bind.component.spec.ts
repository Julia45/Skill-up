import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrBindComponent } from './attr-bind.component';

describe('AttrBindComponent', () => {
  let component: AttrBindComponent;
  let fixture: ComponentFixture<AttrBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
