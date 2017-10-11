import * as category from '../actions/category.actions';
import { Category } from '../store/model';

const initialState: Category[] = [];

export function categoryReducer(state: Category[] = initialState, action: category.Actions): Category[] {
    switch (action.type) {
        case category.ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}
