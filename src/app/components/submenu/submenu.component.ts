import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Account, AppState } from '../../store/model';
import { Store } from '@ngrx/store';
import * as account from '../../actions/account.actions';
import { selectCategory } from '../../store/category.actions';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    items: Observable<Account[]>;

    newItem: Account = null;

    types = [
        { title: 'Accounts', active: true, storeSelector: account.selectAccounts },
        { title: 'Categories', active: false, storeSelector: selectCategory }
    ];

    currentType = {};

    avbailableTranslations = {
        'Accounts': {
            empty: 'No accounts created',
            new: 'New account'
        },
        'Categories': {
            empty: 'No categories created',
            new: 'New category'
        }
    };

    translations = {};

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.selectType('Accounts');
        this.currentType = this.types[0];
    }

    onSelectType = (evt, type) => {
        this.selectType(type.title);
        this.currentType = type;
    };

    onSelectItem = (evt, item) => {
        // this.items.forEach(it => { it.isSelected = it === item; });
        this.onSelect.emit({ type: this.currentType, item });
    };

    onAddItem = (evt) => {
        this.newItem = new Account();
    };

    onEnterCheck = (evt) => {
        // Enable saving the new item with "ENTER"
        if (evt.charCode === 13) {
            this.onSaveNewItem(this.newItem);
        }
    };

    onSaveNewItem = (item: Account) => {
        this.store.dispatch(new account.AddAction(item));
        // Add to store and reset new item
        this.newItem = null;
    };

    private selectType(typeName: string): void {
        this.types.forEach(t => t.active = t.title === typeName);
        this.items = this.store.select(this.types.find(t => t.title === typeName).storeSelector);

        if (this.avbailableTranslations.hasOwnProperty(typeName)) {
            this.translations = this.avbailableTranslations[typeName];
        }
    }
}
