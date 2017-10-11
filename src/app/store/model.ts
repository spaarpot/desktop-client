import { generateUuid } from '../utility/uuid';

export interface AppState {
    metadata: Metadata;
    accounts: Account[];
    categories: Category[];
}

export class Metadata {
    filename?: string;
}

export class ClassificationType {
    title: string;
    active: boolean;
    get: any;
    addAction: any;
}

// TODO: Naming?
export class Classification {
    id: string;
    title: string;
    balance?: number;

    constructor(title: string = '', balance = 0) {
        this.id = generateUuid();
        this.title = title;
        this.balance = balance;
    }
}

export class Account extends Classification {
    constructor(title: string = '', balance = 0) {
        super(title, balance);
    }
}

export class Category extends Classification {
    constructor(title: string = '', balance = 0) {
        super(title, balance);
    }
}

export class SubmenuItem {
    item: Classification;
    isSelected: boolean;

    constructor(item: Classification) {
        this.item = item;
        this.isSelected = false;
    }
}
