import { Action, State, StateContext, Selector } from '@ngxs/store';
import { Account } from './account';
import { CreateAccount, DeleteAccount, ToggleAccount } from './account.actions';

interface AccountStateModel {
    accounts: Account[];
}

const sampleAccounts: Account[] = [
    { accountDescription: 'Housing Loan Account', active: true },
    { accountDescription: 'Construciton Loan Account', active: true },
    { accountDescription: 'Life insurance Account', active: true }
];

@State<AccountStateModel>({
    name: 'account',
    defaults: {
        accounts: sampleAccounts
    }
})

export class AccountState {
    
    @Action(CreateAccount)
    createAccount(ctx: StateContext<AccountStateModel>, action: CreateAccount) {
        const account = { accountDescription: action.payload, active: false };
        ctx.patchState({
            accounts: [account, ...ctx.getState().accounts]
        });
    }

    @Action(DeleteAccount)
    DeleteAccount(ctx: StateContext<AccountStateModel>, action: DeleteAccount) {
        const { accounts } = ctx.getState();
        ctx.patchState({
            accounts: accounts.filter(account => account !== action.payload)
        })
    }

    @Action(ToggleAccount)
    ToggleAccount(ctx: StateContext<AccountStateModel>, action: ToggleAccount) {
        const account = action.payload;
        account.active = !account.active;
        ctx.patchState({
            accounts: [...ctx.getState().accounts]
        })
    }

    @Selector()
    static accounts(state: AccountStateModel): Account[] {
        return state.accounts;
    }

    @Selector()
    static numUncheckedAccounts(state: AccountStateModel): number {
    //   return state.accounts.filter(account => !account.active).length;
      return state.accounts.length;
    }

}