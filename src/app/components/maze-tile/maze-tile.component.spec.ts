import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeTileComponent } from './maze-tile.component';

describe('MazeTileComponent', () => {
  let component: MazeTileComponent;
  let fixture: ComponentFixture<MazeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
