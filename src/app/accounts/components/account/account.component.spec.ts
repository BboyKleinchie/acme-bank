import { Spectator, createComponentFactory  } from '@ngneat/spectator';

import { AccountComponent } from './account.component';
import { ACCOUNT_TYPES } from '../../constants/accounts.constants';

describe('[AccountComponent]', () => {
  let spectator: Spectator<AccountComponent>;

  const createComponent = createComponentFactory ({
    component: AccountComponent,
    shallow: true,
  });

  beforeEach(() => spectator = createComponent());

  it('should create component correctly', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should withdraw savings correctly', () => {
    spectator.setInput({
      accountNumber: 5248117462997084,
      accountType: ACCOUNT_TYPES.SAVINGS,
      balance: 980
    });

    spyOn(window, 'alert')
      .and
      .callThrough();

    spectator.component.withdraw();

    expect(window.alert)
      .toHaveBeenCalledWith('Success');

    expect(spectator.component.canWithdraw)
      .toEqual(true);
  });
  
  it('should not withdraw savings if less than balance', () => {
    spectator.setInput({
      accountNumber: 5248117462997084,
      accountType: ACCOUNT_TYPES.SAVINGS,
      balance: -20
    });

    spyOn(window, 'alert')
      .and
      .callThrough();

    spectator.component.withdraw();

    expect(window.alert)
      .not
      .toHaveBeenCalled();

    expect(spectator.component.canWithdraw)
      .toEqual(false);
  });

  it('should withdraw from current account correctly', () => {
    spectator.setInput({
      accountNumber: 6331103626640816,
      accountType: ACCOUNT_TYPES.CURRENT,
      balance: 500
    });

    spyOn(window, 'alert')
      .and
      .callThrough();

    spectator.component.withdraw();

    expect(window.alert)
      .toHaveBeenCalledWith('Success');

    expect(spectator.component.canWithdraw)
      .toEqual(true);
  });

  it('should withdraw overdraft from current account correctly', () => {
    spectator.setInput({
      accountNumber: 6331103626640816,
      accountType: ACCOUNT_TYPES.CURRENT,
      balance: -499
    });

    spyOn(window, 'alert')
      .and
      .callThrough();

    spectator.component.withdraw();

    expect(window.alert)
      .toHaveBeenCalledWith('Success');

    expect(spectator.component.canWithdraw)
      .toEqual(true);
  });

  it('should not withdraw an overdraft above the overdraft limit', () => {
    spectator.setInput({
      accountNumber: 6331103626640816,
      accountType: ACCOUNT_TYPES.CURRENT,
      balance: -501
    });

    spyOn(window, 'alert')
      .and
      .callThrough();

    spectator.component.withdraw();

    expect(window.alert)
      .not
      .toHaveBeenCalled();

    expect(spectator.component.canWithdraw)
      .toEqual(false);
  });
});
