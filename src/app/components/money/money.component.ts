import { Component, Input, DoCheck } from '@angular/core';

@Component({
    selector: 'app-money',
    templateUrl: './money.component.html',
    styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements DoCheck {
    @Input() number: number;

    performanceClass: string;

    ngDoCheck() {
        this.performanceClass = '';

        if (this.number > 0) {
            this.performanceClass = 'positive';
        } else if (this.number < 0) {
            this.performanceClass = 'negative';
        }
    }
}
