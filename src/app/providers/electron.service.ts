import { Injectable } from '@angular/core';
import * as Electron from 'electron';

@Injectable()
export class ElectronService {

    private electron: Electron.RendererInterface;

    constructor() {
        // Conditional imports
        if (this.isElectron()) {
            this.electron = window.require('electron');
        }
    }

    isElectron = (): boolean => {
        return !!window.navigator.userAgent.match(/Electron/);
    };

    public get remote(): Electron.Remote {
        return this.electron.remote;
    }
}
