import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightMonsterComponent } from './fight-monster.component';

describe('FightMonsterComponent', () => {
  let component: FightMonsterComponent;
  let fixture: ComponentFixture<FightMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
