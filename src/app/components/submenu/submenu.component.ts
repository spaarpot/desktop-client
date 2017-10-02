import { Component, OnInit } from '@angular/core';
import { Account } from '../../storage/model';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/model';
import { Store } from '@ngrx/store';
import { selectAccounts } from '../../store/account.actions';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

    items: Observable<Array<Account>>;

    types = [
        { title: 'Accounts', active: true },
        { title: 'Categories', active: false }
    ];

    constructor(private store: Store<AppState>) {
        this.items = store.select(selectAccounts);
    }


    ngOnInit(): void {
        this.selectType('Accounts');
    }

    onSelectType = (evt, type) => {
        this.selectType(type.title);
    };

    private selectType(typeName: string): void {
        // this.types.forEach(t => t.active = t.title === typeName);
        //
        // if (typeName === 'Accounts') {
        //     this.items = this.storageService.getAccounts();
        // } else {
        //     this.items = this.storageService.getCategories();
        // }
    }
}
