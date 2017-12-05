import * as path from 'path';
import { Injectable } from '@angular/core';
import * as Electron from 'electron';
import { FileStore } from '../store/file-store';

@Injectable()
export class ElectronService {

    private electron: Electron.RendererInterface;

    private fileStore;

    constructor() {
        // Conditional imports
        if (this.isElectron()) {
            this.electron = window.require('electron');
        }

        const storeOptions = {
            storeName: 'conf',
            defaults: {
                recent: []
            }
        };

        this.fileStore = new FileStore(storeOptions);
    }

    isElectron = (): boolean => {
        return !!window.navigator.userAgent.match(/Electron/);
    };

    public get remote(): Electron.Remote {
        return this.electron.remote;
    }

    getRecentFiles() {
        return this.fileStore
            .get('recent')
            .map(f => {
                return {
                    fileName: path.basename(f, path.extname(f)),
                    filePath: f
                };
            });
    }

    recordOpenFile(filename: string): void {
        let recent = this.fileStore.get('recent') || [];
        recent = recent.filter(filePath => filePath !== filename);
        this.fileStore.set('recent', [filename, ...recent]);
    }
}
