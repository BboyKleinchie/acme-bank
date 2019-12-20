import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ServiceHelper } from '../general/services/service-helper';
import { AccountsStore } from './stores/accounts.store';
import { AccountComponent } from './components/account/account.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountsService } from './services/accounts.service';

@NgModule({
declarations: [AccountComponent, AccountsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AccountsComponent
  ],
  providers: [
    ServiceHelper,
    AccountsService,
    AccountsStore,
  ]
})
export class AccountsModule { }
