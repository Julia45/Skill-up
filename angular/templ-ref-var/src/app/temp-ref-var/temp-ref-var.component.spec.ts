import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefVarComponent } from './temp-ref-var.component';

describe('TempRefVarComponent', () => {
  let component: TempRefVarComponent;
  let fixture: ComponentFixture<TempRefVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempRefVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
