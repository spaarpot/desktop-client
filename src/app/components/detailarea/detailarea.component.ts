import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Account, Transaction, AppState } from '../../store/model';
import * as transaction from '../../actions/transaction.actions';

@Component({
    selector: 'app-detailarea',
    templateUrl: './detailarea.component.html',
    styleUrls: ['./detailarea.component.scss']
})
export class DetailareaComponent {
/**
 * TODO:
 * ----------
 *  - Add styleable component for datepicker
 *  - Add styleable component for select (with autocomplete)
 *  - ? Disallow amount = null -> default of 0
 */
    /**
     * List of all available categories.
     */
    @Input() categories: Account[];

    /**
     * List of all available accounts.
     */
    @Input() accounts: Account[];

    /**
     * Transaction to edit.
     */
    @Input() transaction: Transaction;

    constructor(private store: Store<AppState>) { }

    onSelectIncome = () => {
        this.transaction.amount = Math.abs(this.transaction.amount);
    }

    onSelectExpense = () => {
        this.transaction.amount = -1 * Math.abs(this.transaction.amount);
    }

    onCommitChanges = (t: Transaction) => {
        const hasChanged = true; // TODO: Diff to previous transaction
        console.log('COMMIT CHANGES');
        console.dir(t);
        this.store.dispatch(new transaction.EditAction(t));
    }
}
