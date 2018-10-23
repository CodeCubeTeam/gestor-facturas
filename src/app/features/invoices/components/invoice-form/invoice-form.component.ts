import { Component, OnInit, Input } from '@angular/core';
import { Item, Quantity, Discount, Surcharge } from '../../interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

    user: FormGroup;

  public items: Item[] = [
    { value: 'items-1', label: 'Items1' },
    { value: 'items-2', label: 'Items2' },
    { value: 'items-3', label: 'Items3' }
  ];
  public quantities: Quantity[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];
  public discounts: Discount[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];
  public surcharges: Surcharge[] = [

  ];

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    this.user = this.fb.group({
      name: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });

  }

  recoger(value: any) {
    console.log(value);
  }
}
