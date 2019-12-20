import { Component, Input, OnInit } from '@angular/core';

import { ACCOUNT_TYPES } from 'src/app/accounts/constants/accounts.constants';
import { OVERDRAFT_LIMIT } from './../../constants/accounts.constants';

@Component({
  selector: 'account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  @Input()
  public accountNumber: number;
  @Input()
  public accountType: ACCOUNT_TYPES;
  @Input()
  public balance: number;

  public canWithdraw: boolean;

  public ngOnInit() {
    const overdraft: number = (this.accountType === ACCOUNT_TYPES.CURRENT) ? OVERDRAFT_LIMIT*-1 : 0;
    
    this.canWithdraw = this.balance > overdraft; 
  }

  public withdraw(): void {
    if (!this.canWithdraw) { return; }
    alert('Success');
  }

}
