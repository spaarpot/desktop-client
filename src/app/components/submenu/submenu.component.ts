import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Account, AppState } from '../../store/model';
import { Store } from '@ngrx/store';
import { selectAccounts } from '../../actions/account.actions';
import { selectCategory } from '../../actions/category.actions';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

    items: Observable<Account[]>;

    types = [
        { title: 'Accounts', active: true, storeSelector: selectAccounts },
        { title: 'Categories', active: false, storeSelector: selectCategory }
    ];

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.selectType('Accounts');
    }

    onSelectType = (evt, type) => {
        this.selectType(type.title);
    };

    private selectType(typeName: string): void {
        this.types.forEach(t => t.active = t.title === typeName);
        this.items = this.store.select(this.types.find(t => t.title === typeName).storeSelector);
    }
}
