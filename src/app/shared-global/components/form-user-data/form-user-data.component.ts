import { Component, OnInit } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material';

@Component({
  selector: 'app-form-user-data',
  templateUrl: './form-user-data.component.html',
  styleUrls: ['./form-user-data.component.css']
})
export class FormUserDataComponent implements OnInit {

  cards = [1, 2];

  constructor() { }

  ngOnInit() {
  }

  visible(addno) {
    addno = false;
    console.log(addno);
  }

}
