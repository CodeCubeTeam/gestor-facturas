import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  cost: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', cost: 1, weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', cost: 1, weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', cost: 1, weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', cost: 1, weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', cost: 1, weight: 10.811, symbol: 'B'}
];

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'cost', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
