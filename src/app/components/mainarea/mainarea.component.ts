import { Component, DoCheck, SimpleChanges, Output, Input, EventEmitter } from '@angular/core';
import { Account, Category, Transaction, TransactionOverviewItem } from '../../store/model';

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

    @Input() selectedAccount: Account;

    @Input() selectedCategory: Category;

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
                    runningBalance: 0,
                    isSelected: false
                };
            });
        }

        // Filter transactions by account
        if (this.selectedAccount != null) {
            this.transactionItems = this.transactionItems.filter((t) => {
                return t.transaction.account === this.selectedAccount.title; // TODO: Prob change to id
            });
        }

        // Filter transactions by category
        if (this.selectedCategory != null) {
            this.transactionItems = this.transactionItems.filter((t) => {
                return t.transaction.category === this.selectedCategory.title; // TODO: Prob change to id
            });
        }

        // Sort by date
        this.transactionItems = this.transactionItems.sort(this.sortTransactionByDate);

        // Deselect all transactionItems and select current one;
        // Recalculate running balance
        let runningBalance = 0;
        this.transactionItems.forEach((item) => {
            runningBalance += item.transaction.amount;
            item.runningBalance = runningBalance;
            item.isSelected = (item.transaction === this.selected);
        });

        // Reverse for display
        this.transactionItems = this.transactionItems.reverse();
    }

    /**
     * Bubble selection of transaction to parent component.
     */
    onTransactionSelected = (t: TransactionOverviewItem) => {
        this.onSelect.emit([t.transaction]);
    }

    private sortTransactionByDate = (a: TransactionOverviewItem, b: TransactionOverviewItem): number => {
        if (a.transaction.creationDate < b.transaction.creationDate) {
            return -1;
        }

        if (a.transaction.creationDate > b.transaction.creationDate) {
            return 1;
        }

        return 0;
    }

    private inverseSort = (sortFn) => {
        return (a, b) => {
            return sortFn(a, b) * -1;
        };
    }
}
