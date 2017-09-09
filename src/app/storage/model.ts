export class Metadata {
}

export class Account {
    title: string;
    balance?: number;
}

export class Transaction {
    creationDate: Date;
    payee: string;
    category: string;
    notes: string;
    amount: number;
}

export class Savefile {
    version: string;
    metadata: Metadata;

    accounts: Account[];
    categories: Account[]; // TODO: Type Account until there is a specific class that shares a common superclass with account.
    transactions: Transaction[];

    constructor() {
        this.accounts = [];
        this.categories = [];
        this.transactions = [];
        this.metadata = new Metadata();
    }
}
