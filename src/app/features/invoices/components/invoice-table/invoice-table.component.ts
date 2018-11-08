import { Component, OnInit, Input } from '@angular/core';
import { Item, Quantity, Discount, Surcharge, Cost } from '../../interfaces';

export interface PeriodicElement {
  quantity: any;
  item: any;
  cost: any;
  discount: any;
  surcharge: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 1, quantity: 2, cost: 3, discount: 4, surcharge: 5},
];

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {

  displayedColumns: any[] = ['item', 'quantity', 'discount', 'surcharge', 'cost'];
  dataSource = ELEMENT_DATA;

  public items: Item[] = [
    { value: '1', label: 'Items1' },
    { value: '2', label: 'Items2' },
    { value: '3', label: 'Items3' }
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
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];

  addItem() {
    if (this.dataSource) {
      console.log('Waka');
      this.dataSource.push( {item: 1, quantity: 2, cost: 3, discount: 4, surcharge: 5}, );
    }
  }

  constructor( ) { }

  ngOnInit() {
  }
}
