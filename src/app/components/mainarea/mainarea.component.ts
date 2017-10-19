import { Component, DoCheck, SimpleChanges, Output, Input, EventEmitter } from '@angular/core';
import { Transaction, TransactionOverviewItem } from '../../store/model';

@Component({
    selector: 'app-mainarea',
    templateUrl: './mainarea.component.html',
    styleUrls: ['./mainarea.component.scss']
})
export class MainareaComponent implements DoCheck {

    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    /**
     * List of transactions to display.
     */
    @Input() transactions: Transaction[];

    /**
     * Currently selected transaction.
     */
    @Input() selected: Transaction;

    /**
     * Converted list of transactions with additional display properties.
     */
    transactionItems: TransactionOverviewItem[] = [];

    ngDoCheck() {
        // Whenever transactions change, map them to transaction overview items.
        if (this.transactionItems.length !== this.transactions.length) {
            this.transactionItems = this.transactions.map((t) => {
                return {
                    transaction: t,
                    isSelected: false
                };
            });
        }

        // Deselect all transactionItems and select current one
        this.transactionItems.forEach((item) => {
            item.isSelected = (item.transaction === this.selected);
        });
    }

    /**
     * Bubble selection of transaction to parent component.
     */
    onTransactionSelected = (t: TransactionOverviewItem) => {
        this.onSelect.emit([t.transaction]);
    }
}
