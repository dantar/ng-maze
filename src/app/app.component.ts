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
  monster: MazeMonster;
  explorer: MazeExplorer;

  ngOnInit() {
    this.newMaze();
  }

  newMaze() {
    this.rest.newMaze(10, 10).subscribe((data: MazeGrid) => {
      this.grid = data;
      this.explorer = {
        life: 10,
        poison: 0,
        gold: 0,
      };
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
