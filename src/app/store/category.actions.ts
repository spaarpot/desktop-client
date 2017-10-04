import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState, Category } from './model';

const ADD = '[Category] Add';

export class AddCategoryAction implements Action {
    readonly type = ADD;

    constructor(public payload: Category) {}
}

export type ActionsTypes = AddCategoryAction;
//    | AddCategoryAction // TODO anpassen
//    | AddCategoryAction; // TODO anpassen

@Injectable()
export class CategoryActions {
    addCategory(name: string): AddCategoryAction {
        return new AddCategoryAction(new Category(name));
    }
}

export const selectCategory = (state: AppState) => state.categories;

