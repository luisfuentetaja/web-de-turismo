import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomonumentosComponent } from './infomonumentos.component';

describe('InfomonumentosComponent', () => {
  let component: InfomonumentosComponent;
  let fixture: ComponentFixture<InfomonumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomonumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomonumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
