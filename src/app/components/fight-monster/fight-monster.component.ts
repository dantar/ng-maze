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

  constructor(private gcs: GamesCommonService) { }

  @Input() monster: MazeMonster;
  @Output() slay: EventEmitter<MazeMonster> = new EventEmitter();

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

  slayMonster() {
    this.slay.emit(this.monster);
  }

  triggerAction(trigger: TriggerAction) {
    trigger.hidden = false;
  }

}

export class TriggerAction {
  hidden: boolean;
  action: CombatAction;
}
