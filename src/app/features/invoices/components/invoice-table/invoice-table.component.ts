import { Component, OnInit, Input } from '@angular/core';
import { InvoiceFormComponent } from '../invoice-form/invoice-form.component';
import { Item, Quantity, Discount, Surcharge } from '../../interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface PeriodicElement {
  quantity: any;
  item: any;
  cost: any;
  discount: any;
  surcharge: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 1, quantity: 'Hydrogen', cost: 1, discount: 1.0079, surcharge: 'H'},
  {item: 2, quantity: 'Helium', cost: 1, discount: 4.0026, surcharge: 'He'},
  {item: 3, quantity: 'Lithium', cost: 1, discount: 6.941, surcharge: 'Li'},
  {item: 4, quantity: 'Beryllium', cost: 1, discount: 9.0122, surcharge: 'Be'},
  {item: 5, quantity: 'Boron', cost: 1, discount: 10.811, surcharge: 'B'}
];

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {

  displayedColumns: string[] = ['item', 'quantity', 'discount', 'surcharge', 'cost'];
  dataSource = ELEMENT_DATA;

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
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];

  constructor( private invoiceForm: InvoiceFormComponent ) { }

  ngOnInit() {
  }
}
