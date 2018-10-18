import { NgModule } from '@angular/core';
import { SharedGlobalModule } from '../../shared-global/shared-global.module';
import { SharedCoreModule } from '../../shared-core/shared-core.module';
import { InvoiceWrappComponent } from './components/invoice-wrapp/invoice-wrapp.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceTableComponent } from './components/invoice-table/invoice-table.component';

@NgModule({
  imports: [
    SharedGlobalModule,
    SharedCoreModule
  ],
  declarations: [
    InvoiceWrappComponent,
    InvoiceFormComponent,
    InvoiceTableComponent
  ],
  exports: [
    InvoiceWrappComponent,
    InvoiceFormComponent
  ]
})
export class InvoicesModule { }
