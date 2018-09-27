import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFacturasComponent } from './components/form-facturas/form-facturas.component';
import { AppRouting } from './app.routing';
import { AppCoreModule } from './app-core/app-core.module';
import { NavFacturasComponent } from './components/nav-facturas/nav-facturas.component';


@NgModule({
  declarations: [
    AppComponent,
    FormFacturasComponent,
    NavFacturasComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AppCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
