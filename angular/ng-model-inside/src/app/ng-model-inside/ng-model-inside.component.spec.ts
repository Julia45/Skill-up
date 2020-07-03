import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelInsideComponent } from './ng-model-inside.component';

describe('NgModelInsideComponent', () => {
  let component: NgModelInsideComponent;
  let fixture: ComponentFixture<NgModelInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
