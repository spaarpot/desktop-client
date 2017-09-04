import { Component } from '@angular/core';
import { formatMoney } from '../../utility/utility';

const dummyGetItems = (type) => {
    if (type.title === 'Accounts') {
        return [
            { title: 'Versicherungen', amount: 238.98 },
            { title: 'Tanken', amount: -47.3 },
            { title: 'Arbeit Essen' },
            { title: 'Sport', amount: -19.99 },
            { title: 'Fortgehen' },
            { title: 'Videospiele' },
            { title: 'Motorrad', amount: 89.93 }
        ];
    } else {
        return [
            { title: 'Sport', amount: -19.99 },
            { title: 'Fortgehen' }
        ];
    }
}

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent {
    items = [
        { title: 'Versicherungen', amount: 238.98 },
        { title: 'Tanken', amount: -47.3 },
        { title: 'Arbeit Essen' },
        { title: 'Sport', amount: -19.99 },
        { title: 'Fortgehen' },
        { title: 'Videospiele' },
        { title: 'Motorrad', amount: 89.93 }
    ]

    types = [
        { title: 'Accounts', active: true },
        { title: 'Categories', active: false }
    ]

    // TODO: Is this the best way? Seems strange...
    formatMoney = formatMoney

    onSelectType = (evt, type) => {
        this.types.forEach(t => t.active = t === type);
        this.items = dummyGetItems(type);
    }
}
