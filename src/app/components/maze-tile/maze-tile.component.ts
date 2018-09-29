import { TriggerAction } from './../fight-monster/fight-monster.component';
import { MazeMonster } from './../../models/maze-monster';
import { TileInfo } from './../../models/tile-info';
import { MazeRoom } from './../../models/maze-room';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maze-tile,[app-maze-tile]',
  templateUrl: './maze-tile.component.html',
  styleUrls: ['./maze-tile.component.css']
})
export class MazeTileComponent implements OnInit {

  constructor() { }

  @Input() tile: TileInfo;
  @Output() fight: EventEmitter<MazeMonster> = new EventEmitter();
  @Output() reach: EventEmitter<TileInfo> = new EventEmitter();

  ngOnInit() {}

  tileTransform(): string {
    return 'translate(' + 300 * this.tile.room.posX + ',' + 300 * this.tile.room.posY + ' )';
  }

}
