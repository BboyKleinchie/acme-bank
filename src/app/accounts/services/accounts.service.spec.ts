import { TestBed } from '@angular/core/testing';

import { AccountsService } from './accounts.service';

describe('[AccountService]', () => {
    let service: AccountsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(AccountsService);
    });

    it('should have the service created correctly', () => {
        expect(service).toBeDefined();
  });
});
