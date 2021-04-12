import { Injectable } from '@angular/core';
import { Hero } from '../../shared/data/hero';
import { Player } from './player.class';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  players: Player[];

  constructor() {
    this.players[0] = new Player();
    this.players[1] = new Player();

    this.players[0].controls = ['Z', 'Q', 'S', 'D'];
    this.players[1].controls = ['8', '4', '5', '6'];
  }

  public setPlayerHero(index: number, hero: Hero) {
    this.players[index].hero = hero;
  }
}
