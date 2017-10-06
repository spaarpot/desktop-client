import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Account, AppState } from '../store/model';

export const ADD = '[Account] Add';
export const LOAD = '[Account] LOAD';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: Account) {}
}

export class LoadAction implements Action {
    readonly type = LOAD;
    constructor(public payload: Account[]) {}
}

export type Actions
    = AddAction
    | LoadAction;

export const selectAccounts = (state: AppState) => state.accounts;
