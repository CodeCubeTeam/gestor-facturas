import { Component, OnInit } from '@angular/core';
import {
  Item,
  Quantity,
  Discount,
  Surcharge,
  Transaction,
  Cost
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
  costs: Cost[] = [
    { value: 'cost-0', label: this.items[0].label },
    { value: 'cost-1', label: this.items[0].label },
    { value: 'cost-2', label: this.items[0].label }
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
  displayedColumns = ['item', 'quantity', 'surcharge', 'discount', 'cost'];

  transactions: Transaction[] = [
    {
      item: this.items[0].label,
      cost: this.costs[0].label,
      quantity: this.quantities[0].label,
      surcharge: this.surcharges[0].label,
      discount: this.discounts[0].label
    }
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map(t => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor() {}

  ngOnInit() {}
}
