import { MazeExplorer } from './../models/maze-explorer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explorer-panel',
  templateUrl: './explorer-panel.component.html',
  styleUrls: ['./explorer-panel.component.css']
})
export class ExplorerPanelComponent implements OnInit {

  constructor() { }

  @Input() explorer: MazeExplorer;

  ngOnInit() {
  }

}
