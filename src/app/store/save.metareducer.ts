import { ActionReducer } from '@ngrx/store';
import { FileLoaded, FILE_LOADED, NEW_FILE, OPEN_FILE } from '../actions/application.actions';
import { writeAppState } from './fileaccess';


export function saveReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('action state', action, state);

        switch (action.type) {
            case FILE_LOADED:
                return reducer((action as FileLoaded).payload, action);
            case NEW_FILE:
            case OPEN_FILE:
                // Ignore, nothing to save yet
                return state;
            default:
                const newState = reducer(state, action);
                writeAppState(newState).subscribe();
                return newState;
        }
    };
}
