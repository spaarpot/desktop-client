import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/model';
import { NewFile, OpenFile } from '../../actions/application.actions';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    constructor(private store: Store<AppState>) { }

    newFile = (): void => {
        this.store.dispatch(new NewFile());
    };

    openFile = (): void => {
        this.store.dispatch(new OpenFile());
    };
}
