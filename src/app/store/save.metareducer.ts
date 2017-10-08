import { ActionReducer } from '@ngrx/store';
import { FileLoaded, FILE_LOADED } from '../actions/application.actions';


export function saveReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('action state', action, state);

        if (action.type === FILE_LOADED) {
            return reducer((action as FileLoaded).payload, action);
        }

        return reducer(state, action);
    };
}
