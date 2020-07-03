import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgnodelComponent } from './ngnodel.component';

describe('NgnodelComponent', () => {
  let component: NgnodelComponent;
  let fixture: ComponentFixture<NgnodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgnodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgnodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
