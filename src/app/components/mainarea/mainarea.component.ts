import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage/storage.service';
import { Transaction } from '../../storage/model';

@Component({
    selector: 'app-mainarea',
    templateUrl: './mainarea.component.html',
    styleUrls: ['./mainarea.component.scss']
})
export class MainareaComponent implements OnInit {

    transactions: Transaction[];

    constructor(private storageService: StorageService) { }

    ngOnInit(): void {
        this.transactions = this.storageService.getTransactions();
    }
}
