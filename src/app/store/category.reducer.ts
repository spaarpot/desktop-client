import { Category } from './model';
import { ADD, ActionsTypes, CategoryActions } from './category.actions';

const initialState: Category[] = [];

export function categoryReducer(state: Category[] = initialState, action: ActionsTypes): Category[] {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}
