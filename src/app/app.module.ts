import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainareaComponent } from './components/mainarea/mainarea.component';
import { DetailareaComponent } from './components/detailarea/detailarea.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { MoneyComponent } from './components/money/money.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { AutoFocusDirective } from './directives/autofocus.directive';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        HeaderComponent,
        HomeComponent,
        MainareaComponent,
        DetailareaComponent,
        SubmenuComponent,
        MoneyComponent,
        CurrencyPipe,
        AutoFocusDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 50 }),
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
