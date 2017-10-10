import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { reducers } from './reducers';
import { saveReducer } from './store/save.metareducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadEffect } from './store/load.effect';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }
];


export const metaReducers: MetaReducer<any>[] = [saveReducer];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([LoadEffect])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
