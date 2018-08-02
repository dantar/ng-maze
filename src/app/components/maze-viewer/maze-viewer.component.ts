import { MazeGrid } from './../../models/maze-grid';
import { MazeRestService } from './../../services/maze-rest.service';
import { MazeRoom } from './../../models/maze-room';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maze-viewer',
  templateUrl: './maze-viewer.component.html',
  styleUrls: ['./maze-viewer.component.css']
})
export class MazeViewerComponent implements OnInit {

  constructor(private rest: MazeRestService) { }

  grid: MazeGrid;
  atX = 0;
  atY = 0;
  tileSize = 300;

  ngOnInit() {
    this.rest.newMaze(10, 10).subscribe((data: MazeGrid) => {
      this.grid = data;
    });
  }

  svgViewBox() {
    return `${this.atX} ${this.atY} ${this.tileSize * this.grid.sizeX} ${this.tileSize * this.grid.sizeY}`;
  }

}
