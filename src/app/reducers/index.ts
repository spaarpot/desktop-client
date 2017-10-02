import { ActionReducerMap, } from '@ngrx/store';
import * as fromAccount from '../store/account.reducer';
import { AppState } from '../store/model';


export const reducers: ActionReducerMap<AppState> = {
    accounts: fromAccount.accountReducer
};
