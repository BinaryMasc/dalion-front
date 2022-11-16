import { TestBed } from '@angular/core/testing';

import { DalionConfigProviderService } from './dalion-config-provider.service';

describe('DalionConfigProviderService', () => {
  let service: DalionConfigProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DalionConfigProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
