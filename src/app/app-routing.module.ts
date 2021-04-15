import { PriceComponent } from './Price/Price.component';
import { ClientsComponent } from './Clients/Clients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'prices', component: PriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
