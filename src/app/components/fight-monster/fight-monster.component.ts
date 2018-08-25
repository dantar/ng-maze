import { MazeExplorer } from './../../models/maze-explorer';
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
  ) { }

  @Input() monster: MazeMonster;
  @Input() explorer: MazeExplorer;
  @Output() slay: EventEmitter<MazeMonster> = new EventEmitter();
  @Output() die: EventEmitter<MazeMonster> = new EventEmitter();

  triggers: TriggerAction[] = [];

  actions = {
    hitsyou: () => {
      this.explorer.life--;
    },
    youhit: () => {
      this.monster.life--;
    },
    gaingold: () => {
      this.explorer.gold++;
    },
  };

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
    this.actions[trigger.action.name]();
  }

}

export class TriggerAction {
  hidden: boolean;
  action: CombatAction;
}
