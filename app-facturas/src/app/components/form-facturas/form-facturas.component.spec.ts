import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFacturasComponent } from './form-facturas.component';

describe('FormFacturasComponent', () => {
  let component: FormFacturasComponent;
  let fixture: ComponentFixture<FormFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
