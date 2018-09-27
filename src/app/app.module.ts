import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { SharedCoreModule } from './shared-core/shared-core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
