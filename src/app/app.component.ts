import { MazeGrid } from './models/maze-grid';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  maze: MazeGrid = {
    name: 'Static Maze',
    sizeX: 2,
    sizeY: 2,
    rooms: [],
  };

}
