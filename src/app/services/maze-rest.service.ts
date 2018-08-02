import { MazeRoom } from './../models/maze-room';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MazeRestService {

  constructor(private httpClient: HttpClient) { }

  newMaze(x: number, y: number): Observable<MazeRoom[][]> {
    return this.httpClient.get<MazeRoom[][]>('http://localhost:8080/newMaze');
  }

}
