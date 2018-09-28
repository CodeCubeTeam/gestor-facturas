import { Component, OnInit } from '@angular/core';

export interface Item {
  value: string;
  viewValue: string;
}
export interface Quantity {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  items: Item[] = [
    {value: 'items-0', viewValue: 'Items1'},
    {value: 'items-1', viewValue: 'Items2'},
    {value: 'items-2', viewValue: 'Items3'}
  ];
  quantitys: Quantity[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
