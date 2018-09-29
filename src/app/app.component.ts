import { TileInfo } from './models/tile-info';
import { TriggerAction } from './components/fight-monster/fight-monster.component';
import { MazeExplorer } from './models/maze-explorer';
import { MazeMonster } from './models/maze-monster';
import { MazeRestService } from './services/maze-rest.service';
import { MazeGrid } from './models/maze-grid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private rest: MazeRestService) { }

  grid: MazeGrid;
  tiles: TileInfo[];
  monster: MazeMonster;
  explorer: MazeExplorer;

  skeleton: MazeMonster = {
    name: 'skeleton',
    keywords: ['undead', 'minion'],
    life: 1,
    attacks: [
      {name: 'hitsyou', text: 'Ti colpisce!'},
      {name: 'hitsyou', text: 'Ti colpisce!'},
      {name: 'youhit', text: 'Lo colpisci!'},
      {name: 'gaingold', text: 'Trovi dell\'oro!'},
    ],
    helpedBy: function (triggers: TriggerAction[], monster: MazeMonster) {
      if (monster.keywords.includes('undead')) {
        this.boon();
      }
      if (monster.keywords.includes('holy')) {
        this.bane(triggers);
      }
    },
    boon: function(triggers: TriggerAction[]) {
      triggers.push({hidden: true, action: {name: 'hitsyou', text: 'Ti colpisce!'}});
    },
    bane: function(triggers: TriggerAction[]) {
      triggers.push({hidden: true, action: {name: 'youhit', text: 'Lo colpisci!'}});
    }
  };

  ngOnInit() {
    this.newMaze();
  }

  newMaze() {
    this.rest.newMaze(10, 10).subscribe((data: MazeGrid) => {
      this.grid = data;
      this.initTiles();
      this.explorer = {
        life: 10,
        poison: 0,
        gold: 0,
      };
    });
  }

  initTiles() {
    this.tiles = [];
    this.grid.rooms.forEach((room) => {
      const tile: TileInfo = {
        room: room,
        hidden: true,
        reach: false,
        monster: null,
      };
      if (room.keywords.includes('skeleton')) {
        tile.monster = this.skeleton;
      }
      this.tiles.push(tile);
    });
  }

  newMonster(monster: MazeMonster) {
    this.monster = monster;
  }

  slayMonster(monster: MazeMonster) {
    this.monster = null;
  }

  explorerDies(monster: MazeMonster) {
    this.monster = null;
    this.newMaze();
  }

}
