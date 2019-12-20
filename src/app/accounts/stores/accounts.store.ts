import { IAccount } from '../models/accounts.model';
import { Store } from 'src/app/general/stores/store';

export class AccountsStore extends Store<IAccount[]> {
    public constructor() {
        super([] as IAccount[]);
    }
}