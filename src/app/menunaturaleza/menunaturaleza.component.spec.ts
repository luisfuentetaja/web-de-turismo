import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunaturalezaComponent } from './menunaturaleza.component';

describe('MenunaturalezaComponent', () => {
  let component: MenunaturalezaComponent;
  let fixture: ComponentFixture<MenunaturalezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenunaturalezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenunaturalezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
