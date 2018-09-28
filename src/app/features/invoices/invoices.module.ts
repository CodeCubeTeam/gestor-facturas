import { NgModule } from '@angular/core';
import { InvoiceWrappComponent } from './invoice-wrapp/invoice-wrapp.component';
import { SharedGlobalModule } from '../../shared-global/shared-global.module';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { SharedCoreModule } from '../../shared-core/shared-core.module';

@NgModule({
  imports: [
    SharedGlobalModule,
    SharedCoreModule
  ],
  declarations: [
    InvoiceWrappComponent,
    InvoiceFormComponent
  ],
  exports: [
    InvoiceWrappComponent,
    InvoiceFormComponent
  ]
})
export class InvoicesModule { }
