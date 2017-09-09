import { ApplicationRef, Component, EventEmitter, Output } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { StorageService } from '../../storage/storage.service';


const FILEFILTERS = [{
    name: 'nvlps save',
    extensions: ['nvlps']
}];


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() onAdd: EventEmitter<any> = new EventEmitter();

    title = 'Cashflow';

    constructor(private electronService: ElectronService,
                private storageService: StorageService,
                private appRef: ApplicationRef) { }

    onAddClick = () => this.onAdd.emit();

    openFile = () => {
        this.electronService.remote.dialog.showOpenDialog({ filters: FILEFILTERS }, (filenames) => {
            if (filenames === undefined) {
                // dialog got canceled
                return;
            }

            this.storageService.openFile(filenames[0])
                .then(() => this.appRef.tick());
        });
    };
}
