import { MatTableDataSource } from '@angular/material';

export class CustomMatTableDataSource extends MatTableDataSource<any> {
  addRow(newData) {
    this.data = [...this.data, newData];
  }

  removeRow() {
    this.data = this.data.slice(0, this.data.length - 1);
  }
}
