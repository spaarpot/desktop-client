import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ElectronService } from '../../providers/electron.service';
import { StorageService } from '../../storage/storage.service';
import { AppState } from '../../store/model';
import * as account from '../../actions/account.actions';

const FILEFILTERS = [{
    name: 'nvlps save',
    extensions: ['nvlps']
}];

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    constructor(private electronService: ElectronService,
                private storageService: StorageService,
                private router: Router,
                private store: Store<AppState>) { }

    newFile = (): void => {
        const filename = this.electronService.remote.dialog.showSaveDialog({ filters: FILEFILTERS });
        if (filename === undefined) {
            // dialog got canceled
            return;
        }

        this.storageService.newFile(filename)
            .then(() => this.router.navigate(['home']))
            .catch((reason) => console.warn('File open failed', reason));
    };

    openFile = (): void => {
        const filenames = this.electronService.remote.dialog.showOpenDialog({ filters: FILEFILTERS });
        if (filenames === undefined) {
            // dialog got canceled
            return;
        }

        this.storageService.openFile(filenames[0])
            .then((accounts) => {
                this.store.dispatch(new account.LoadAction(accounts));
                this.router.navigate(['home']);
            })
            .catch((reason) => console.warn('File open failed', reason));
    };
}
