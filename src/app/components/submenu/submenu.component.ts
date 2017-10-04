import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../storage/storage.service';
import { Account } from '../../storage/model';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    items: Account[];

    newItem: Account = null;

    types = [
        { title: 'Accounts', active: true },
        { title: 'Categories', active: false }
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

    constructor(private storageService: StorageService) { }

    ngOnInit(): void {
        this.selectType('Accounts');
        this.currentType = this.types[0];
    }

    onSelectType = (evt, type) => {
        this.selectType(type.title);
        this.currentType = type;
    };

    onSelectItem = (evt, item) => {
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

    onSaveNewItem = (item: Account) => {
        // Add to store and reset new item
        this.items.push(item); // DUMMY
        this.newItem = null;
    };

    private selectType(typeName: string): void {
        this.types.forEach(t => t.active = t.title === typeName);

        if (typeName === 'Accounts') {
            this.items = this.storageService.getAccounts();
        } else {
            this.items = this.storageService.getCategories();
        }

        if (this.avbailableTranslations.hasOwnProperty(typeName)) {
            this.translations = this.avbailableTranslations[typeName];
        }
    }
}
