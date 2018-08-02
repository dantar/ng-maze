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

  // room1: MazeRoom = { north: true, south: false, east: true, west: true, posX: 0, posY: 0 };
  // room2: MazeRoom = { north: false, south: false, east: false, west: true, posX: 1, posY: 0 };

  rooms: MazeRoom[][];

  ngOnInit() {
    this.rest.newMaze(10, 10).subscribe((data: MazeRoom[][]) => {
      this.rooms = data;
    });
  }

}
