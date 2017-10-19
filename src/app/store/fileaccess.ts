import * as fs from 'fs';
import { Observable } from 'rxjs/Rx';
import { AppState } from './model';

const readFile = Observable.bindNodeCallback(
    (filename: string, encoding: string, callback: (err: Error, data: string) => void) => fs.readFile(filename, encoding, callback)
);

const writeFile = Observable.bindNodeCallback(
    (filename: string, data: any, callback: (err: Error, data?: any) => void) => fs.writeFile(filename, data, callback)
);

export const readAppState = (filename: string): Observable<AppState> => {
    return readFile(filename, 'UTF-8')
        .map(data => {
            const state = <AppState> JSON.parse(data);
            state.metadata.filename = filename;
            return state;
        });
};

export const writeAppState = (state: AppState): Observable<AppState> => {
    const filename = state.metadata.filename;

    const stateCopy = JSON.parse(JSON.stringify(state)); // get a deep copy of the state.
    stateCopy.metadata.filename = null;

    return writeFile(filename, JSON.stringify(stateCopy) + '\n');
};
