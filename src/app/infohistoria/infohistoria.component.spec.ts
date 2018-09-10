import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohistoriaComponent } from './infohistoria.component';

describe('InfohistoriaComponent', () => {
  let component: InfohistoriaComponent;
  let fixture: ComponentFixture<InfohistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfohistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfohistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
