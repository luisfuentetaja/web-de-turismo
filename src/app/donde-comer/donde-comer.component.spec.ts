import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeComerComponent } from './donde-comer.component';

describe('DondeComerComponent', () => {
  let component: DondeComerComponent;
  let fixture: ComponentFixture<DondeComerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DondeComerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeComerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
