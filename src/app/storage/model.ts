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
