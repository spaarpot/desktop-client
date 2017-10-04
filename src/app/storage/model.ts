export class Account {
    title: string;
    balance?: number;
    isSelected?: boolean;
}

export class Transaction {
    creationDate: Date;
    payee: string;
    category: string;
    notes: string;
    amount: number;
}
