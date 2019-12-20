import { ACCOUNT_TYPES } from '../constants/accounts.constants';

export interface IAccount {
    account_number: number;
    account_type: ACCOUNT_TYPES;
    balance: number;
}