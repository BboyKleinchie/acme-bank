import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts/components/accounts/accounts.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent }, 
  { 
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  },
  { path: '**', component: AccountsComponent } // in live application will either have a page not found component or revert to home page with a page not found error message or toastr
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
