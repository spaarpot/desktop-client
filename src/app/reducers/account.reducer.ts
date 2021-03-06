import * as account from '../actions/account.actions';
import { Account } from '../store/model';

const initialState: Account[] = [];

export function accountReducer(state: Account[] = initialState, action: account.Actions): Account[] {
    switch (action.type) {
        case account.ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}
