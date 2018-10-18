import { Component, OnInit } from '@angular/core';
import {
  Item,
  Quantity,
  Discount,
  Surcharge
} from '../../interfaces';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})

export class InvoiceFormComponent implements OnInit {
  items: Item[] = [
    { value: 'items-0', label: 'Items1' },
    { value: 'items-1', label: 'Items2' },
    { value: 'items-2', label: 'Items3' }
  ];
  quantities: Quantity[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];
  discounts: Discount[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];
  surcharges: Surcharge[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];

  constructor() {}

  ngOnInit() {}
}
