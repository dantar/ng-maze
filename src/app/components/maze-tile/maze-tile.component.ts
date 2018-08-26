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
  @Output() fight: EventEmitter<String> = new EventEmitter();
  @Output() reach: EventEmitter<TileInfo> = new EventEmitter();

  ngOnInit() {
  }

  tileTransform(): string {
    return 'translate(' + 300 * this.tile.room.posX + ',' + 300 * this.tile.room.posY + ' )';
  }

  isRoom(): boolean {
    let count = 0;
    if (this.tile.room.north) {
      count = count + 1;
    }
    if (this.tile.room.south) {
      count = count + 1;
    }
    if (this.tile.room.east) {
      count = count + 1;
    }
    if (this.tile.room.west) {
      count = count + 1;
    }
    return count === 1;
  }

  isCorridor(): boolean {
    return !this.isRoom();
  }

}
