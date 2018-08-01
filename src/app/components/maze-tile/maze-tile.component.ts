import { MazeRoom } from './../../models/maze-room';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maze-tile,[app-maze-tile]',
  templateUrl: './maze-tile.component.html',
  styleUrls: ['./maze-tile.component.css']
})
export class MazeTileComponent implements OnInit {

  constructor() { }

  @Input() room: MazeRoom;

  ngOnInit() {
  }

  tileTransform(): string {
    return 'translate(' + 300 * this.room.posX + ',' + 300 * this.room.posY + ' )';
  }
}
