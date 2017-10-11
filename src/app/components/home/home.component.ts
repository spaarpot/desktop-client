import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Account, AppState, Category } from '../../store/model';
import { Store } from '@ngrx/store';
import * as account from '../../actions/account.actions';
import * as category from '../../store/category.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {
    isSidebarOpen = true;

    accounts$: Observable<Account[]>;

    accounts: Account[];

    categories$: Observable<Category[]>;

    categories: Category[];

    private accountsSub: Subscription;

    private categoriesSub: Subscription;

    constructor(private store: Store<AppState>) {
        this.accounts$ = store.select(account.selectAccounts);
        this.categories$ = store.select(category.selectCategory);
    }

    ngOnInit() {
        this.accountsSub = this.accounts$.subscribe(state => { this.accounts = state; });
        this.categoriesSub = this.categories$.subscribe(state => { this.categories = state; });
    }

    ngOnDestroy() {
        this.accountsSub.unsubscribe();
        this.categoriesSub.unsubscribe();
    }

    onHeaderAddClicked = () => {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    onSidebarItemSelected = ({ type, item }: { type: string, item: Account }) => {
        console.log(type);
        console.log(item);
    }
}
