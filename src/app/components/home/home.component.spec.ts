import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { MainareaComponent } from '../mainarea/mainarea.component';
import { SubmenuComponent } from '../submenu/submenu.component';
import { StorageModule } from '../../storage/storage.module';
import { CurrencyPipe } from '../../pipes/currency.pipe';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, HeaderComponent, MainareaComponent, SubmenuComponent, CurrencyPipe],
            imports: [StorageModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'App works !'`, async(() => {
        fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('App works !');
    }));

    it('should render title in a #header element', async(() => {
        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#header').textContent).toContain('Cashflow');
    }));
});
