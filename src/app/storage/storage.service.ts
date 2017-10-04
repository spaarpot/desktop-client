import { Injectable } from '@angular/core';
import { Account, Savefile, Transaction } from './model';
import * as fs from 'fs';

@Injectable()
export class StorageService {

    private filename: string;
    private savefile: Savefile;

    constructor() {
        this.savefile = new Savefile();
    }

    getAccounts = (): Account[] => {
        return this.savefile.accounts;
    };

    createAccount = (account: Account): Promise<void> => {
        this.savefile.accounts.push(account);
        return this.save();
    };

    getCategories = (): Account[] => {
        return this.savefile.categories;
    };

    createCategory = (category: Account): Promise<void> => {
        this.savefile.categories.push(category);
        return this.save();
    };

    getTransactions = (): Transaction[] => {
        return this.savefile.transactions;
    };

    createTransaction = (transaction: Transaction): Promise<void> => {
        this.savefile.transactions.push(transaction);
        return this.save();
    };

    newFile = (filename: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, JSON.stringify(new Savefile()), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    };

    openFile = (filename: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) {
                    console.warn('An error occurred opening the file ' + err.message);
                    reject(err);
                } else {
                    console.log('Loading file ' + filename);
                    this.filename = filename;
                    this.savefile = JSON.parse(data);
                    resolve();
                }
            });
        });
    };

    private save = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.filename, JSON.stringify(this.savefile), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    };
}
