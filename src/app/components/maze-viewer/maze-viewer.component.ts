import { MazeGrid } from './../../models/maze-grid';
import { MazeRestService } from './../../services/maze-rest.service';
import { MazeRoom } from './../../models/maze-room';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maze-viewer',
  templateUrl: './maze-viewer.component.html',
  styleUrls: ['./maze-viewer.component.css']
})
export class MazeViewerComponent implements OnInit {

  @Input() grid: MazeGrid;
  atX = 0;
  atY = 0;
  tileSize = 300;

  ngOnInit() {
  }

  svgViewBox() {
    return `${this.atX} ${this.atY} ${this.tileSize * this.grid.sizeX} ${this.tileSize * this.grid.sizeY}`;
  }

}
