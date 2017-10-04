import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Account, AppState } from './model';

const ADD = '[Account] Add';

export class AddAccountAction implements Action {
    readonly type = ADD;

    constructor(public payload: Account) {}
}

export type ActionsTypes = AddAccountAction;
//    | AddAccountAction // TODO anpassen
//    | AddAccountAction; // TODO anpassen

@Injectable()
export class AccountActions {
    addAccount(name: string): AddAccountAction {
        return new AddAccountAction(new Account(name));
    }
}

export const selectAccounts = (state: AppState) => state.accounts;
// export const selectAccountsCount =  createSelector(selectAccounts, (accounts: Account[]) => accounts.length);
