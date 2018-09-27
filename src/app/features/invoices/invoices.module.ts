import { NgModule } from '@angular/core';
import { InvoiceWrappComponent } from './invoice-wrapp/invoice-wrapp.component';
import { SharedGlobalModule } from '../../shared-global/shared-global.module';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

@NgModule({
  imports: [
    SharedGlobalModule
  ],
  declarations: [
    InvoiceWrappComponent,
    InvoiceFormComponent
  ]
})
export class InvoicesModule { }
