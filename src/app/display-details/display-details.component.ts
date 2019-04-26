import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../account.state';
import { Account } from '../account';
import { DeleteAccount, ToggleAccount } from '../account.actions';

@Component({
    selector: 'display-details',
    templateUrl: './display-details.component.html',
    styleUrls: ['./display-details.component.scss']
})

export class DisplayDetailsComponent {
    constructor(private store: Store) { }

    @Select(AccountState.accounts)
    accounts: Observable<Account[]>;

    @Select(AccountState.numUncheckedAccounts)
    uncheckedAccounts: Observable<number>;

    deleteAccount(account: Account) {
        this.store.dispatch(new DeleteAccount(account));
    }
    toggleAccount(account: Account) {
        this.store.dispatch(new ToggleAccount(account));
    }
}
