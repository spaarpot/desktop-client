import { Component } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { StorageService } from '../../storage/storage.service';
import { Router } from '@angular/router';

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
                private router: Router) { }

    openFile = () => {
        const filenames = this.electronService.remote.dialog.showOpenDialog({ filters: FILEFILTERS });
        if (filenames === undefined) {
            // dialog got canceled
            return;
        }

        this.storageService.openFile(filenames[0])
            .then(() => {
                this.router.navigate(['home']);
            })
            .catch((reason) => console.warn('File open failed', reason));
    };
}
