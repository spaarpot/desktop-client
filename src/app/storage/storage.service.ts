import { Injectable } from '@angular/core';
import { Account, Transaction, Savefile } from './model';
import * as fs from 'fs';

@Injectable()
export class StorageService {

    private savefileName: string;
    private savefile: Savefile;

    getAccounts = (): Account[] => {
        return this.savefile.accounts;
    };

    getCategories = (): Account[] => {
        return this.savefile.categories;
    };

    getTransactions = (): Transaction[] => {
        return this.savefile.transactions;
    };

    openFile = (filename: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) {
                    console.warn('An error occurred opening the file ' + err.message);
                    reject(err);
                } else {
                    this.savefileName = filename;
                    this.savefile = JSON.parse(data);
                    resolve();
                }
            });
        });
    };

}
