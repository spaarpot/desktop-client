import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Account, AppState, Category, Transaction, Classification, ClassificationType, SubmenuItem } from '../../store/model';
import { Store } from '@ngrx/store';
import * as account from '../../actions/account.actions';
import * as category from '../../actions/category.actions';
import * as transaction from '../../actions/transaction.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {
    isSidebarOpen = false;

    accounts$: Observable<Account[]>;

    accounts: Account[];

    categories$: Observable<Category[]>;

    categories: Category[];

    transactions$: Observable<Transaction[]>;

    transactions: Transaction[];

    selectedAccount: Account = null;

    selectedCategory: Category = null;

    selectedTransaction: Transaction = null;

    private accountsSub: Subscription;

    private categoriesSub: Subscription;

    private transactionsSub: Subscription;

    constructor(private store: Store<AppState>) {
        this.accounts$ = store.select(account.selectAccounts);
        this.categories$ = store.select(category.selectCategory);
        this.transactions$ = store.select(transaction.selectTransactions);
    }

    ngOnInit() {
        this.accountsSub = this.accounts$.subscribe(state => { this.accounts = state; });
        this.categoriesSub = this.categories$.subscribe(state => { this.categories = state; });
        this.transactionsSub = this.transactions$.subscribe(state => { this.transactions = state; });
    }

    ngOnDestroy() {
        this.accountsSub.unsubscribe();
        this.categoriesSub.unsubscribe();
        this.transactionsSub.unsubscribe();
    }

    onHeaderAddClicked = () => {
        const t: Transaction = this.createEmptyTransaction();
        this.onTransactionSelected(t);
    }

    /**
     * Create a new empty transaction.
     */
    createEmptyTransaction = () => {
        const t: Transaction = new Transaction();

        if (this.selectedAccount != null) {
            t.account = this.selectedAccount.title;
        }

        if (this.selectedCategory != null) {
            t.category = this.selectedCategory.title;
        }

        this.store.dispatch(new transaction.AddAction(t));
        return t;
    }

    /**
     * Toggle display of detail sidebar.
     */
    openSidebar = () => {
        this.isSidebarOpen = true;
    }

    /**
     * Callback on Selection of transaction item.
     */
    onTransactionSelected = (t: Transaction) => {
        this.selectedTransaction = t;
        this.openSidebar();
    }

    /**
     * Callback on Selection of sidebar item.
     */
    onSidebarItemSelected = ({ type, item }: { type: ClassificationType, item: SubmenuItem }) => {
        // TODO: ...

        // reset selected items
        this.resetSelectedSidebarItems();

        if (type.title === 'Accounts') {
            this.selectedAccount = item.item;
        } else if (type.title === 'Categories') {
            this.selectedCategory = item.item;
        }
        console.log(type);
        console.log(item);
    }

    resetSelectedSidebarItems = () => {
        this.selectedAccount = null;
        this.selectedCategory = null;
    }
}
