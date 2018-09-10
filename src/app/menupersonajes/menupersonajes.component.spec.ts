import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupersonajesComponent } from './menupersonajes.component';

describe('MenupersonajesComponent', () => {
  let component: MenupersonajesComponent;
  let fixture: ComponentFixture<MenupersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenupersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
