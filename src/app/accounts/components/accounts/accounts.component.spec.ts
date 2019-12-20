import { Spectator, createComponentFactory  } from '@ngneat/spectator';

import { AccountsComponent } from './accounts.component';

describe('[AccountsComponent]', () => {
  let spectator: Spectator<AccountsComponent>;

  const createComponent = createComponentFactory ({
    component: AccountsComponent,
    shallow: true,
  });

  beforeEach(() => spectator = createComponent());

  it('should create component correctly', () => {
    expect(spectator.component).toBeDefined();
  });
});
