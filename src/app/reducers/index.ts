import { ActionReducerMap, } from '@ngrx/store';
import * as fromAccount from './account.reducer';
import * as fromCategory from '../store/category.reducer';
import { AppState } from '../store/model';

export const reducers: ActionReducerMap<AppState> = {
    accounts: fromAccount.accountReducer,
    categories: fromCategory.categoryReducer
};
