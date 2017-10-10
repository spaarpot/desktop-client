import { Action } from '@ngrx/store';
import { AppState, Category } from '../store/model';

export const ADD = '[Category] Add';

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: Category) {}
}

export type Actions
    = AddAction;

export const selectCategory = (state: AppState) => state.categories;
