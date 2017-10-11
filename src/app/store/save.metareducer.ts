import { ActionReducer } from '@ngrx/store';
import { FileLoaded, FILE_LOADED } from '../actions/application.actions';
import { writeAppState } from './fileaccess';


export function saveReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('action state', action, state);

        if (action.type === FILE_LOADED) {
            return reducer((action as FileLoaded).payload, action);
        } else {
            const newState = reducer(state, action);
            writeAppState(newState);
            return newState;
        }
    };
}
