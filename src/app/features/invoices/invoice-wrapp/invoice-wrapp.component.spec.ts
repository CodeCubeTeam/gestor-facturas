import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceWrappComponent } from './invoice-wrapp.component';

describe('InvoiceWrappComponent', () => {
  let component: InvoiceWrappComponent;
  let fixture: ComponentFixture<InvoiceWrappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceWrappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceWrappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
