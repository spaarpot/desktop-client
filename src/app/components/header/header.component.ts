import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() onAdd: EventEmitter<any> = new EventEmitter();

    title = 'Cashflow';

    onAddClick = () => this.onAdd.emit();
}
