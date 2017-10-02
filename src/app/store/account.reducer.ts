import { AccountActions, ActionsTypes } from './account.actions';
import { Account } from './model';


const initialState: Array<Account> = [
    new Account('Test1', 100),
    new Account('Test2', 200)
];

export function accountReducer(state: Array<Account> = initialState, action: ActionsTypes): Array<Account> {
    switch (action.type) {
        case AccountActions.ADD_ACCOUNT:
            return [...state, action.payload];
        default:
            return state;
    }
}
