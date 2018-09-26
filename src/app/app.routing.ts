import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFacturasComponent } from './components/form-facturas/form-facturas.component';

// Pages (Static)


// Components


// Guards


const routes: Routes = [
  {
    path: '',
    component: FormFacturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
