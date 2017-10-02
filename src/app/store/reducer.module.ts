import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from './account.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot(accountReducer)
    ]
})
export class ReducerModule {
}
