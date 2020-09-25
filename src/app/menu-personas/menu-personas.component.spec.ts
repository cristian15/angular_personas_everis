import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonasComponent } from './menu-personas.component';

describe('MenuPersonasComponent', () => {
  let component: MenuPersonasComponent;
  let fixture: ComponentFixture<MenuPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
