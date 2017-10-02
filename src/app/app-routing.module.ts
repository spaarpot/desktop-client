import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { reducers } from './reducers';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.forRoot(reducers),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
