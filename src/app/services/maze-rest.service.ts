import { MazeGrid } from './../models/maze-grid';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MazeRestService {

  constructor(private httpClient: HttpClient) { }

  newMaze(x: number, y: number): Observable<MazeGrid> {
    return this.httpClient.get<MazeGrid>('http://localhost:8080/newMaze');
  }

}
