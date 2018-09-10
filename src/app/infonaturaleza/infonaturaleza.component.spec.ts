import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfonaturalezaComponent } from './infonaturaleza.component';

describe('InfonaturalezaComponent', () => {
  let component: InfonaturalezaComponent;
  let fixture: ComponentFixture<InfonaturalezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfonaturalezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfonaturalezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
