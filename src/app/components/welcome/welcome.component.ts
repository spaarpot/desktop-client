import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ElectronService } from '../../providers/electron.service';
import { AppState } from '../../store/model';
import { NewFile, OpenFile } from '../../actions/application.actions';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    recentFiles: any[] = [];

    constructor(private electronService: ElectronService,
                private store: Store<AppState>) {
        this.recentFiles = electronService.getRecentFiles();
    }

    newFile = (): void => {
        this.store.dispatch(new NewFile());
    };

    openFile = (): void => {
        this.store.dispatch(new OpenFile());
    };

    openRecent = (file): void => {
        this.store.dispatch(new OpenFile(file.filePath));
    }
}
