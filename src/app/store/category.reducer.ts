import { Category } from './model';
import { ADD, ActionsTypes, CategoryActions } from './category.actions';


const initialState: Category[] = [
    new Category('Test Category 1', 900),
    new Category('Test Category 2', 800)
];

export function categoryReducer(state: Category[] = initialState, action: ActionsTypes): Category[] {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}
