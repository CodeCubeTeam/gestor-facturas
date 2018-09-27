import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialImportsModule } from './angular-material-imports/angular-material-imports.module';
import { NavGlobalComponent } from './components/nav-global/nav-global.component';

@NgModule({
  imports: [
    AngularMaterialImportsModule,
    BrowserAnimationsModule
  ],
  declarations: [NavGlobalComponent],
  exports: [
    AngularMaterialImportsModule,
    NavGlobalComponent
  ]
})
export class SharedCoreModule { }
