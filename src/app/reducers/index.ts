import { ActionReducerMap, } from '@ngrx/store';
import * as fromAccount from './account.reducer';
import * as fromCategory from './category.reducer';
import * as fromTransaction from './transaction.reducer';
import { AppState } from '../store/model';


export function noopReducer(state: any = {}, action: any): any {
    return state;
}

export const reducers: ActionReducerMap<AppState> = {
    metadata: noopReducer,
    accounts: fromAccount.accountReducer,
    categories: fromCategory.categoryReducer,
    transactions: fromTransaction.transactionReducer,
};
