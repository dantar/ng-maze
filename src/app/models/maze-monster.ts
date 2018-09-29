import { TriggerAction } from './../components/fight-monster/fight-monster.component';
import { CombatAction } from './combat-action';

export class MazeMonster {
  name: string;
  keywords: string[] = [];
  attacks: CombatAction[] = [];
  life: number;

  helpedBy(triggers: TriggerAction[], monster: MazeMonster) {}
  helps?(triggers: TriggerAction[], monster: MazeMonster) {}
  boon(triggers: TriggerAction[]) {}
  bane(triggers: TriggerAction[]) {}

}
