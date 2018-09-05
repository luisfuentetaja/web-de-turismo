import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatologiaComponent } from './climatologia.component';

describe('ClimatologiaComponent', () => {
  let component: ClimatologiaComponent;
  let fixture: ComponentFixture<ClimatologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
