import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialImportsModule } from './angular-material-imports/angular-material-imports.module';
import { NavGlobalComponent } from './components/nav-global/nav-global.component';
import { AppRouting } from '../app.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialImportsModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  declarations: [NavGlobalComponent],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialImportsModule,
    NavGlobalComponent
  ]
})
export class SharedCoreModule { }
