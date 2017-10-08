import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { ElectronService } from '../../providers/electron.service';
import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from '../../reducers/index';
import { StoreModule } from '@ngrx/store';

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
            imports: [StoreModule.forRoot(reducers), RouterTestingModule.withRoutes([])],
            providers: [ElectronService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
