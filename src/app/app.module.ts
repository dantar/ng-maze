import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MazeRestService } from './services/maze-rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MazeViewerComponent } from './components/maze-viewer/maze-viewer.component';
import { MazeTileComponent } from './components/maze-tile/maze-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    MazeViewerComponent,
    MazeTileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [MazeRestService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
