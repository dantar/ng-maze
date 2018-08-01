import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeViewerComponent } from './maze-viewer.component';

describe('MazeViewerComponent', () => {
  let component: MazeViewerComponent;
  let fixture: ComponentFixture<MazeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
