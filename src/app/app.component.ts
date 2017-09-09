import { Component, ViewEncapsulation } from '@angular/core';
import { ElectronService } from './providers/electron.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    styles: [
        require ('opensans-npm-webfont')
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(public electronService: ElectronService) {

        if (electronService.isElectron()) {
            console.log('Mode electron');
        } else {
            console.log('Mode web');
        }
    }
}
