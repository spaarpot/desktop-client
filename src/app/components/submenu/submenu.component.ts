import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage/storage.service';
import { Account } from '../../storage/model';

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

    items: Account[];

    types = [
        { title: 'Accounts', active: true },
        { title: 'Categories', active: false }
    ];

    constructor(private storageService: StorageService) {}


    ngOnInit(): void {
        this.selectType('Accounts');
    }

    onSelectType = (evt, type) => {
        this.selectType(type.title);
    };

    private selectType(typeName: string): void {
        this.types.forEach(t => t.active = t.title === typeName);

        if (typeName === 'Accounts') {
            this.items = this.storageService.getAccounts();
        } else {
            this.items = this.storageService.getCategories();
        }
    }
}
