import { TestBed, inject } from '@angular/core/testing';

import { GamesCommonService } from './games-common.service';

describe('GamesCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesCommonService]
    });
  });

  it('should be created', inject([GamesCommonService], (service: GamesCommonService) => {
    expect(service).toBeTruthy();
  }));
});
