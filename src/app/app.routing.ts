import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceWrappComponent } from './features/invoices/invoice-wrapp/invoice-wrapp.component';

// Pages (Static)


// Components


// Guards


const routes: Routes = [
  {
    path: '',
    component: InvoiceWrappComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
