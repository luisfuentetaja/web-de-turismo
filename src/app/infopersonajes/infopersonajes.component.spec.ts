import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopersonajesComponent } from './infopersonajes.component';

describe('InfopersonajesComponent', () => {
  let component: InfopersonajesComponent;
  let fixture: ComponentFixture<InfopersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
