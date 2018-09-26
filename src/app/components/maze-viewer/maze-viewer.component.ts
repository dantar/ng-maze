import { TileInfo } from './../../models/tile-info';
import { MazeMonster } from './../../models/maze-monster';
import { MazeGrid } from './../../models/maze-grid';
import { MazeRestService } from './../../services/maze-rest.service';
import { MazeRoom } from './../../models/maze-room';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-maze-viewer',
  templateUrl: './maze-viewer.component.html',
  styleUrls: ['./maze-viewer.component.css']
})
export class MazeViewerComponent implements OnInit {

  @Input() grid: MazeGrid;
  @Input() visible = true;
  @Output() fight: EventEmitter<MazeMonster> = new EventEmitter();

  mapTiles: TileInfo[][];
  allTiles: TileInfo[];

  atX = 0;
  atY = 0;
  tileSize = 300;

  ngOnInit() {
    this.allTiles = [];
    this.mapTiles = [];
    for (let index = 0; index < this.grid.sizeX; index++) {
      this.mapTiles[index] = [];
    }
    this.grid.rooms.forEach((room) => {
      this.mapTiles[room.posX][room.posY] = {
        room: room,
        hidden: true,
        reach: false,
      };
      this.allTiles.push(this.mapTiles[room.posX][room.posY]);
    });
    this.revealTile(this.mapTiles[0][0]);
  }

  svgViewBox() {
    return `${this.atX} ${this.atY} ${this.tileSize * this.grid.sizeX} ${this.tileSize * this.grid.sizeY}`;
  }

  getStyle(): string {
    return 'display:none;';
  }

  revealTile(tile: TileInfo) {
    tile.hidden = false;
    if (tile.room.north) {
      this.mapTiles[tile.room.posX][tile.room.posY - 1].reach = true;
    }
    if (tile.room.south) {
      this.mapTiles[tile.room.posX][tile.room.posY + 1].reach = true;
    }
    if (tile.room.east) {
      this.mapTiles[tile.room.posX + 1][tile.room.posY].reach = true;
    }
    if (tile.room.west) {
      this.mapTiles[tile.room.posX - 1][tile.room.posY].reach = true;
    }
  }

}
