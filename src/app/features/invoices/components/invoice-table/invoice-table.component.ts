import { Component, OnInit } from '@angular/core';


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

  constructor( ) { }

  ngOnInit() {
  }

}
