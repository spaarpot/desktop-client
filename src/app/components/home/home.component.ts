import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = `App works !`;

    isSidebarOpen = true;

    constructor() { }

    ngOnInit() {
    }

    onHeaderAddClicked = () => {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    onSidebarItemSelected = ({ type, item }: { type: string, item: Account }) => {
        console.log(type);
        console.log(item);
    }
}
