import { Component, OnInit, Input } from '@angular/core';
import { Item, Quantity, Discount, Surcharge, Cost } from '../../interfaces';
import { CustomMatTableDataSource } from './../../../../shared-global/class/custom-mat-table-data-source';

export interface PeriodicElement {
  quantity: any;
  item: any;
  cost: any;
  discount: any;
  surcharge: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: { value: 0, label: '' },
    quantity: { value: 0, label: '' },
    cost: { value: 0, label: '' },
    discount: { value: 0, label: '' },
    surcharge: { value: 0, label: '' }
  }
];

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  displayedColumns: any[] = [
    'item',
    'quantity',
    'discount',
    'surcharge',
    'cost'
  ];
  myDataSource = new CustomMatTableDataSource();

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
    if (this.myDataSource) {
      this.myDataSource.addRow(
        {
            item: { value: 0, label: '' },
            quantity: { value: 0, label: '' },
            cost: { value: 0, label: '' },
            discount: { value: 0, label: '' },
            surcharge: { value: 0, label: '' }
      });
    }
  }
  removeItem() {
    this.myDataSource.removeRow();
  }

  constructor() {}

  ngOnInit() {
    this.addItem();
  }
}
