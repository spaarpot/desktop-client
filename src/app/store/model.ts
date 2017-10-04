import { generateUuid } from '../utility/uuid';

export interface AppState {
    accounts: Account[];
    categories: Category[];
}

export class Account {
    id: string;
    title: string;
    balance?: number;

    constructor(title: string, balance = 0) {
        this.id = generateUuid();
        this.title = title;
        this.balance = balance;
    }
}

export class Category {
    id: string;
    title: string;
    balance?: number;

    constructor(title: string, balance = 0) {
        this.id = generateUuid();
        this.title = title;
        this.balance = balance;
    }
}
