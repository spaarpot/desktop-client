import { ADD, AccountActions, ActionsTypes } from './account.actions';
import { Account } from './model';

const initialState: Account[] = [
    new Account('Test Account 1', 100),
    new Account('Test Account 2', 200)
];

export function accountReducer(state: Account[] = initialState, action: ActionsTypes): Account[] {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}
