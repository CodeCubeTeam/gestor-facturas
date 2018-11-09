import { NgModule } from '@angular/core';
import { FormClientDataComponent } from './components/form-client-data/form-client-data.component';
import { FormUserDataComponent } from './components/form-user-data/form-user-data.component';
import { SharedCoreModule } from '../shared-core/shared-core.module';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

@NgModule({
  imports: [SharedCoreModule, ReactiveFormsModule, FormsModule ],
  declarations: [
    FormUserDataComponent,
    FormClientDataComponent
  ],
  exports: [
    FormUserDataComponent,
    FormClientDataComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedGlobalModule { }
