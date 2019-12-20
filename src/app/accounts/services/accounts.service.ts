import { Injectable } from "@angular/core";

import { ServiceHelper } from '../../general/services/service-helper';
import { API_ENDPOINTS } from '../../general/constants/api-paths';
import { IAccount } from '../models/accounts.model';

@Injectable()
export class AccountsService {
    public constructor(private serviceHelper: ServiceHelper<IAccount>) {}

    public getAccounts(): Promise<IAccount[]> {
        return this.serviceHelper.getAll(API_ENDPOINTS.ACCOUNTS);
    }
}