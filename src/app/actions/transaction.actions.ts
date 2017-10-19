import { Action } from '@ngrx/store';
import { Transaction, AppState } from '../store/model';

export const ADD = '[Transaction] Add';
export const EDIT = '[Transaction] EDIT';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: Transaction) {}
}

export class EditAction implements Action {
    readonly type = EDIT;
    constructor(public payload: Transaction) {}
}

export type Actions
    = AddAction
    | EditAction;

export const selectTransactions = (state: AppState) => state.transactions;
