import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFacturasComponent } from './nav-facturas.component';

describe('NavFacturasComponent', () => {
  let component: NavFacturasComponent;
  let fixture: ComponentFixture<NavFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
