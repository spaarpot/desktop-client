import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState, Category } from './model';


export class AddCategoryAction implements Action {
    readonly type = CategoryActions.ADD;

    constructor(public payload: Category) {}
}

export type ActionsTypes = AddCategoryAction;
//    | AddCategoryAction // TODO anpassen
//    | AddCategoryAction; // TODO anpassen


@Injectable()
export class CategoryActions {
    static ADD = '[Category] Add';

    addCategory(name: string): AddCategoryAction {
        return new AddCategoryAction(new Category(name));
    }
}

export const selectCategory = (state: AppState) => state.categories;
