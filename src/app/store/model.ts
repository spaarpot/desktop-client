export interface AppState {
    accounts: Array<Account>;
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

function generateUuid() {
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); // tslint:disable-line
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}
