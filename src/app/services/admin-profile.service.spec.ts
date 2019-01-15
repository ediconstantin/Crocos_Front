import { TestBed, inject } from '@angular/core/testing';

import { AdminProfileService } from './admin-profile.service';

describe('AdminProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminProfileService]
    });
  });

  it('should be created', inject([AdminProfileService], (service: AdminProfileService) => {
    expect(service).toBeTruthy();
  }));
});
