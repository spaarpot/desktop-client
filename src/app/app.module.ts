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
import { SubmenuComponent } from './components/submenu/submenu.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { StorageModule } from './storage/storage.module';
import { CurrencyPipe } from './pipes/currency.pipe';
import { AutoFocusDirective } from './directives/autofocus.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        MainareaComponent,
        SubmenuComponent,
        CurrencyPipe,
        AutoFocusDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        StorageModule
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
