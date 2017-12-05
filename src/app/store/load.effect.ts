import { Actions, Effect } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppState } from './model';
import { ElectronService } from '../providers/electron.service';
import { Router } from '@angular/router';
import * as fromAppActions from '../actions/application.actions';
import { readAppState, writeAppState } from './fileaccess';

const initialState: AppState = {
    metadata: {},
    accounts: [],
    categories: [],
    transactions: []
};

const FILEFILTERS = [{
    name: 'nvlps save',
    extensions: ['nvlps']
}];

@Injectable()
export class LoadEffect {

    @Effect()
    private newFile$ = this.actions$
        .ofType(fromAppActions.NEW_FILE)
        .exhaustMap(() =>
            this.newFile()
                .map(appstate => (new fromAppActions.FileLoaded(appstate)))
                .catch(error => Observable.of({ type: '[Application] FILE_LOADED_ERROR', payload: error }))
        );

    @Effect()
    private openFile$ = this.actions$
        .ofType(fromAppActions.OPEN_FILE)
        .exhaustMap((...args) =>
            this.openFile(...args)
                .map(appstate => (new fromAppActions.FileLoaded(appstate)))
                .catch(error => Observable.of({ type: '[Application] FILE_LOADED_ERROR', payload: error }))
        );

    @Effect({ dispatch: false })
    private fileLoaded$ = this.actions$
        .ofType(fromAppActions.FILE_LOADED)
        .do(() => this.router.navigate(['home']));

    constructor(private electronService: ElectronService,
                private actions$: Actions,
                private router: Router) {}

    private newFile = (): Observable<AppState> => {
        const filename = this.electronService.remote.dialog.showSaveDialog({ filters: FILEFILTERS });
        if (filename === undefined) {
            // dialog got canceled, TODO: Handle! Currently throws an error
            return;
        }

        const state = Object.assign({}, initialState);
        initialState.metadata.filename = filename;
        return writeAppState(initialState)
            .switchMap(() => readAppState(filename));
    };

    private openFile = (...rest): Observable<AppState> => {
        const [ openFileAction ] = rest as any;
        console.log(openFileAction);

        let fileToOpen: string;
        if (!!openFileAction && !!openFileAction.file) {
            fileToOpen = openFileAction.file;
        } else {
            fileToOpen = this.getFileNameFromDialog();
        }

        if (!!fileToOpen) {
            this.electronService.recordOpenFile(fileToOpen);
            return readAppState(fileToOpen);
        }
    };

    private getFileNameFromDialog = () => {
        const filenames = this.electronService.remote.dialog.showOpenDialog({ filters: FILEFILTERS });
        if (filenames === undefined) {
            // dialog got canceled, TODO: Handle! Currently throws an error
            return null;
        }

        return filenames[0];
    }
}
