import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFacturasComponent } from './components/form-facturas/form-facturas.component';
import { AppRouting } from './app.routing';
import { AppCoreModule } from './app-core/app-core.module';
import { NavFacturasComponent } from './components/nav-facturas/nav-facturas.component';
import { FormUserDataComponent } from './components/form-user-data/form-user-data.component';
import { FormClientDataComponent } from './components/form-client-data/form-client-data.component';


@NgModule({
  declarations: [
    AppComponent,
    FormFacturasComponent,
    NavFacturasComponent,
    FormUserDataComponent,
    FormClientDataComponent
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
