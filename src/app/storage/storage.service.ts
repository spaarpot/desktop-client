import { Injectable } from '@angular/core';
import { Account, Transaction } from './model';

@Injectable()
export class StorageService {

    DUMMY_ACCOUNTS: Account[] = [
        { title: 'Versicherungen', balance: 238.98 },
        { title: 'Tanken', balance: -47.3 },
        { title: 'Arbeit Essen' },
        { title: 'Sport', balance: -19.99 },
        { title: 'Fortgehen' },
        { title: 'Videospiele' },
        { title: 'Motorrad', balance: 89.93 }
    ];

    DUMMY_CATEGORIES: Account[] = [
        { title: 'Sport', balance: -19.99 },
        { title: 'Fortgehen' }
    ];

    DUMMY_TRANSACTIONS: Transaction[] = [
        { creationDate: new Date(), payee: 'BMW Heiligenstadt', category: 'Auto Reperatur', notes: 'Rücklicht', amount: -159.3 },
        { creationDate: new Date(), payee: 'BMW Heiligenstadt', category: 'Auto Reperatur', notes: 'Rücklicht', amount: -159.3 },
        { creationDate: new Date(), payee: 'BMW Heiligenstadt', category: 'Auto Reperatur', notes: 'Rücklicht', amount: -159.3 },
        { creationDate: new Date(), payee: 'BMW Heiligenstadt', category: 'Auto Reperatur', notes: 'Rücklicht', amount: -159.3 },
        { creationDate: new Date(), payee: 'BMW Heiligenstadt', category: 'Auto Reperatur', notes: 'Rücklicht', amount: -159.3 },
        { creationDate: new Date(), payee: 'BMW Heiligenstadt', category: 'Auto Reperatur', notes: 'Rücklicht', amount: -159.3 },
    ];

    constructor() {
    }

    getAccounts(): Account[] {
        return this.DUMMY_ACCOUNTS;
    }

    // TODO: Type is currently Account, until there is a Category/Pot/whatever class that shares a common superclass with account.
    // TODO: If this is not the same as above, we would need 2 directives for displaying them. Maybe this is also a way to go.
    getCategories(): Account[] {
        return this.DUMMY_CATEGORIES;
    }

    getTransactions(): Transaction[] {
        return this.DUMMY_TRANSACTIONS;
    }
}
