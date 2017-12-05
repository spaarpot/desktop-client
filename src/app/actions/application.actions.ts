import { Action } from '@ngrx/store';
import { AppState } from '../store/model';

export const FILE_LOADED = '[Application] FILE_LOADED';
export const NEW_FILE = '[Application] NEW_FILE';
export const OPEN_FILE = '[Application] OPEN_FILE';

export class FileLoaded implements Action {
    readonly type = FILE_LOADED;
    constructor(public payload: AppState) {}
}

export class NewFile implements Action {
    readonly type = NEW_FILE;
}

export class OpenFile implements Action {
    readonly type = OPEN_FILE;
    constructor(public file: string = null) {}
}
