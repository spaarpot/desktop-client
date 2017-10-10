import { Action } from '@ngrx/store';
import { Account, AppState } from '../store/model';

export const ADD = '[Account] Add';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: Account) {}
}

export type Actions
    = AddAction;

export const selectAccounts = (state: AppState) => state.accounts;
