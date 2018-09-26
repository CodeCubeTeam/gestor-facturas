import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialImportsModule } from './angular-material-imports/angular-material-imports.module';

@NgModule({
  imports: [
    AngularMaterialImportsModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class AppCoreModule { }
