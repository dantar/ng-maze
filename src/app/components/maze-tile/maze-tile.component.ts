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

  tileClass = 'hidden';

  ngOnInit() {
  }

  tileTransform(): string {
    return 'translate(' + 300 * this.room.posX + ',' + 300 * this.room.posY + ' )';
  }

  clickTile(event) {
    if (this.tileClass === 'visible') {
      this.tileClass = 'hidden';
    } else {
      this.tileClass = 'visible';
    }
  }

  isRoom(): boolean {
    let count = 0;
    if (this.room.north) {
      count = count + 1;
    }
    if (this.room.south) {
      count = count + 1;
    }
    if (this.room.east) {
      count = count + 1;
    }
    if (this.room.west) {
      count = count + 1;
    }
    return count === 1;
  }

  isCorridor(): boolean {
    return !this.isRoom();
  }

}
