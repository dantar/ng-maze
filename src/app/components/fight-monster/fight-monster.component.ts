import { MazeGameService } from './../../maze-game.service';
import { GamesCommonService } from './../../services/games-common.service';
import { CombatAction } from './../../models/combat-action';
import { MazeMonster } from './../../models/maze-monster';
import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-fight-monster',
  templateUrl: './fight-monster.component.html',
  styleUrls: ['./fight-monster.component.css']
})
export class FightMonsterComponent implements OnInit {

  constructor(
    private gcs: GamesCommonService,
    private mazeGame: MazeGameService,
  ) { }

  @Input() monster: MazeMonster;
  @Input() explorer: MazeMonster;
  @Output() slay: EventEmitter<MazeMonster> = new EventEmitter();
  @Output() die: EventEmitter<MazeMonster> = new EventEmitter();

  triggers: TriggerAction[] = [];

  ngOnInit() {
    this.monster.attacks.forEach(attack => {
      this.triggers.push({
        hidden: true,
        action: attack,
      });
    });
    this.gcs.shuffle(this.triggers);
  }

  triggerAction(trigger: TriggerAction) {
    trigger.hidden = false;
    if (trigger.action.name === 'hitsyou') {
      this.explorer.life--;
      // if (this.explorer.life <= 0) {
      //   this.die.emit(this.monster);
      // }
    }
    if (trigger.action.name === 'youhit') {
      this.monster.life--;
      // if (this.monster.life <= 0) {
      //   this.slay.emit(this.monster);
      // }
    }
  }

}

export class TriggerAction {
  hidden: boolean;
  action: CombatAction;
}
