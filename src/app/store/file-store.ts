import * as path from 'path';
import * as fs from 'fs';
// const { app } = require('electron');

// https://medium.com/@ccnokes/how-to-store-user-data-in-electron-3ba6bf66bc1e
export class FileStore {
    filePath: string;

    data: any;

    constructor({ storeName, defaults }) {
        // TODO!!!
        // // const { app } = window.require('electron');
        // // const dir = app.getPath('userData');
        const dir = path.join(__dirname, '..');
        this.filePath = path.join(dir, `${storeName}.json`);
        this.data = parseFile(this.filePath, defaults);
    }

    get(key) {
        return this.data[key];
    }

    set(key, val) {
        this.data[key] = val;

        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
    }
}

const parseFile = (filePath, defaults) => {
    try {
        const fileContent = fs.readFileSync(filePath);
        return JSON.parse(fileContent.toString());
    } catch (error) {
        return defaults;
    }
};
