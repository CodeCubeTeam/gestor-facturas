import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user-data',
  templateUrl: './form-user-data.component.html',
  styleUrls: ['./form-user-data.component.css']
})
export class FormUserDataComponent implements OnInit {

  cards = [1, 2]

  constructor() { }

  ngOnInit() {
  }

}
