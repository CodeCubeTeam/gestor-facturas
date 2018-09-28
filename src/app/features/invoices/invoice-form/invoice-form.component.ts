import { Component, OnInit } from '@angular/core';

export interface Item {
  value: string;
  viewValue: string;
}
export interface Quantity {
  value: string;
  viewValue: string;
}
export interface Discount {
  value: string;
  viewValue: string;
}
export interface Recharge {
  value: string;
  viewValue: string;
}
export interface Transaction {
  item: string;
  cost: number;
  quantity: any;
}
@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  items: Item[] = [
    { value: 'items-0', viewValue: 'Items1' },
    { value: 'items-1', viewValue: 'Items2' },
    { value: 'items-2', viewValue: 'Items3' }
  ];
  quantities: Quantity[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];
  discounts: Discount[] = [
    { value: '1', viewValue: 'discount1' },
    { value: '2', viewValue: 'discount2' },
    { value: '3', viewValue: 'discount3' }
  ];
  recharges: Recharge[] = [
    { value: '1', viewValue: 'recharge1' },
    { value: '2', viewValue: 'recharge2' },
    { value: '3', viewValue: 'recharge3' }
  ];
  displayedColumns = ['item', 'quantity', 'cost'];
  transactions: Transaction[] = [
    {
      item: 'Beach ball',
      quantity: this.quantities.viewValue,
      cost: 4
    },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 }
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
