import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mainarea',
    templateUrl: './mainarea.component.html',
    styleUrls: ['./mainarea.component.scss']
})
export class MainareaComponent implements OnInit {

    transactions: any[]; // TODO model

    constructor() { }

    ngOnInit(): void {
        this.transactions = []; // TODO this.storageService.getTransactions();
    }
}
