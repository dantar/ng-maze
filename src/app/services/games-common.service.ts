import { Injectable } from '@angular/core';

@Injectable()
export class GamesCommonService {

  constructor() { }

  shuffle(a: any[]) {
    let rindex: number;
    for (let index = a.length; index > 1 ; index--) {
      rindex = this.randomInt(0, index - 1);
      a.push(a[rindex]);
      a.splice(rindex, 1);
    }
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
