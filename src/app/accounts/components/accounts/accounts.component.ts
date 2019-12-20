import { reduce, isEmpty } from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AccountsStore } from '../../stores/accounts.store';
import { AccountsService } from '../../services/accounts.service';
import { IAccount } from '../../models/accounts.model';
import { Subscriber } from '../../../general/abstract/subscriber';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent extends Subscriber<void> implements OnInit, OnDestroy {
  public accounts: IAccount[];
  public balance: number;

  public constructor(
    private accountsService: AccountsService, 
    private accountsStore: AccountsStore) { 
      super();
  }

  public ngOnInit() {
    this.getAllAccounts();

    this.accountsStore.subscribe(
      this.destroyed,
      (accounts: IAccount[]) => {
        this.accounts = accounts

        if (isEmpty(accounts)) { return; }

        this.balance = reduce(this.accounts, (sum, account: IAccount) => sum + +account.balance, 0);
      }
    );
  }

  private getAllAccounts(): void {
    this.accountsService.getAccounts()
      .then((accounts: IAccount[]) => this.accountsStore.setStoreResults(accounts))
      .catch((error: any) => console.error('An error occured when trying to retrieve all accounts', error));
  }

}