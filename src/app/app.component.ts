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

  ngOnInit() {
    this.newMaze();
  }

  newMaze() {
    this.rest.newMaze(10, 10).subscribe((data: MazeGrid) => {
      this.grid = data;
    });
  }

  newMonster() {
    this.monster = {
      name: 'Skeleton',
      keywords: ['undead', 'minion'],
      attacks: [
        {name: 'hitsyou', text: 'Ti colpisce!'},
        {name: 'hitsyou', text: 'Ti colpisce!'},
        {name: 'youhit', text: 'Lo colpisci!'},
      ]
    };
  }

  slayMonster(monster: MazeMonster) {
    this.monster = null;
  }

}
