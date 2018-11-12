import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user-data',
  templateUrl: './form-user-data.component.html',
  styleUrls: ['./form-user-data.component.css']
})
export class FormUserDataComponent implements OnInit {

  public edit_client = false;
  public edit_myinfo = false;

  My_info: any[];

  Seeinf() {
    console.log(this.My_info);
  }

  constructor() {}

  ngOnInit() {}

}
