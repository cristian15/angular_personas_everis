import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPersonaComponent } from './ingreso-persona.component';

describe('IngresoPersonaComponent', () => {
  let component: IngresoPersonaComponent;
  let fixture: ComponentFixture<IngresoPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
