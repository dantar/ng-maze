import { GamesCommonService } from './services/games-common.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MazeRestService } from './services/maze-rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MazeViewerComponent } from './components/maze-viewer/maze-viewer.component';
import { MazeTileComponent } from './components/maze-tile/maze-tile.component';
import { FightMonsterComponent } from './components/fight-monster/fight-monster.component';
import { ExplorerPanelComponent } from './explorer-panel/explorer-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    MazeViewerComponent,
    MazeTileComponent,
    FightMonsterComponent,
    ExplorerPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    MazeRestService,
    GamesCommonService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
