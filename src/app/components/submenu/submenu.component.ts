import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Account, AppState, Category, Classification, ClassificationType, SubmenuItem } from '../../store/model';
import { Store } from '@ngrx/store';
import * as account from '../../actions/account.actions';
import * as category from '../../actions/category.actions';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit, OnChanges {
    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    @Output() onDeselect: EventEmitter<any> = new EventEmitter();

    @Input() accounts: Account[];

    @Input() categories: Category[];

    items: SubmenuItem[];

    newItem: Classification = null;

    types: ClassificationType[] = [
        {
            title: 'Accounts',
            active: true,
            get: (comp: SubmenuComponent) => comp.accounts,
            addAction: (payload) => new account.AddAction(payload)
        },
        {
            title: 'Categories',
            active: false,
            get: (comp: SubmenuComponent) => comp.categories,
            addAction: (payload) => new category.AddAction(payload)
        }
    ];

    currentType: ClassificationType;

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

    ngOnChanges(): void {
        if (this.currentType && this.currentType !== null) {
            this.updateItems(this.currentType);
        }
    }

    onSelectType = (evt, type) => {
        this.selectType(type.title);
        this.currentType = type;
        this.onDeselect.emit();
    };

    /**
     * Callback on Selection of sidebar item.
     */
    onSelectItem = (evt, item: SubmenuItem) => {
        this.items.forEach(it => { it.isSelected = it === item; });
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

    onSaveNewItem = (item: Classification) => {
        // TODO: Make check more robust?
        if (item != null && item.title !== '') {
            this.store.dispatch(this.currentType.addAction(item));
        }

        // Add to store and reset new item
        this.newItem = null;
    };

    private selectType(typeName: string): void {
        this.currentType = this.types.find(t => t.title === typeName);
        this.types.forEach(t => t.active = t === this.currentType);

        this.updateItems(this.currentType);

        if (this.avbailableTranslations.hasOwnProperty(typeName)) {
            this.translations = this.avbailableTranslations[typeName];
        }
    }

    private updateItems(type: ClassificationType) {
        this.items = this.currentType
            .get(this)
            .map(it => new SubmenuItem(it));
    }
}
