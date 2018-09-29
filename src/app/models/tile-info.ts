import { MazeMonster } from './maze-monster';
import { MazeRoom } from './maze-room';
export class TileInfo {

  room: MazeRoom;
  monster: MazeMonster;
  hidden = true;
  reach = false;

}
