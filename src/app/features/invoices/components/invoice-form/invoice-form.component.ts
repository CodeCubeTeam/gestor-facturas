import { Component, OnInit } from '@angular/core';
import { Item, Quantity, Discount, Surcharge, Transaction } from '../../interfaces';

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
  displayedColumns = ['item', 'quantity', 'cost', 'surcharge', 'discount'];

  transactions: Transaction[] = [
    {
      item: 'Beach ball',
      cost: 4,
      quantity: this.quantities[0].label,
      surcharge: this.surcharges[0].label,
      discount: this.discounts[0].label
    },
    {
      item: 'Towel',
      cost: 5,
      quantity: this.quantities[0].label,
      surcharge: this.surcharges[0].label,
      discount: this.discounts[0].label
    },
    {
      item: 'Frisbee',
      cost: 2,
      quantity: this.quantities[0].label,
      surcharge: this.surcharges[0].label,
      discount: this.discounts[0].label
    },
    {
      item: 'Sunscreen',
      cost: 4,
      quantity: this.quantities[0].label,
      surcharge: this.surcharges[0].label,
      discount: this.discounts[0].label
    },
    {
      item: 'Cooler',
      cost: 25,
      quantity: this.quantities[0].label,
      surcharge: this.surcharges[0].label,
      discount: this.discounts[0].label
    },
    {
      item: 'Swim suit',
      cost: 15,
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
  constructor() { }

  ngOnInit() { }
}
