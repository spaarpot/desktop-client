import { inject, TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('DatastoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StorageService]
        });
    });

    it('should be created', inject([StorageService], (service: StorageService) => {
        expect(service).toBeTruthy();
    }));

    it('should return a nonempty array of accounts', inject([StorageService], (service: StorageService) => {
        const accounts = service.getAccounts();
        expect(accounts.length).toBeGreaterThan(1);
    }));
});
