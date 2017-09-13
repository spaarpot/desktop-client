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
});
