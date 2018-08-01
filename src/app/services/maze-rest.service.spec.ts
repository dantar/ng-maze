import { TestBed, inject } from '@angular/core/testing';

import { MazeRestService } from './maze-rest.service';

describe('MazeRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MazeRestService]
    });
  });

  it('should be created', inject([MazeRestService], (service: MazeRestService) => {
    expect(service).toBeTruthy();
  }));
});
