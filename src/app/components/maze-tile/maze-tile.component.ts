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

  monster: MazeMonster;

  ngOnInit() {
    if (this.tile.room.keywords.includes('skeleton')) {
      this.monster = {
        name: 'skeleton',
        keywords: ['undead', 'minion'],
        life: 1,
        attacks: [
          {name: 'hitsyou', text: 'Ti colpisce!'},
          {name: 'hitsyou', text: 'Ti colpisce!'},
          {name: 'youhit', text: 'Lo colpisci!'},
          {name: 'gaingold', text: 'Trovi dell\'oro!'},
        ]
      };
    }
  }

  tileTransform(): string {
    return 'translate(' + 300 * this.tile.room.posX + ',' + 300 * this.tile.room.posY + ' )';
  }

}
