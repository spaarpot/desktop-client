import * as transaction from '../actions/transaction.actions';
import { Transaction } from '../store/model';

const initialState: Transaction[] = [];

const reduceEditAction = (state: Transaction[], action: transaction.EditAction) => {
    const otherTransactions = state.filter((t: Transaction) => t.id !== action.payload.id);
    return [...otherTransactions, action.payload];
};

export function transactionReducer(state: Transaction[] = initialState, action: transaction.Actions): Transaction[] {
    switch (action.type) {
        case transaction.ADD:
            return [...state, action.payload];
        case transaction.EDIT:
            return reduceEditAction(state, action);
        default:
            return state;
    }
}
