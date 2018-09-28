import { NgModule } from '@angular/core';
import { FormClientDataComponent } from './components/form-client-data/form-client-data.component';
import { FormUserDataComponent } from './components/form-user-data/form-user-data.component';
import { SharedCoreModule } from '../shared-core/shared-core.module';

@NgModule({
  imports: [SharedCoreModule],
  declarations: [
    FormUserDataComponent,
    FormClientDataComponent
  ],
  exports: [
    FormUserDataComponent,
    FormClientDataComponent
  ]
})
export class SharedGlobalModule { }
