import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientDataComponent } from './form-client-data.component';

describe('FormClientDataComponent', () => {
  let component: FormClientDataComponent;
  let fixture: ComponentFixture<FormClientDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClientDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
