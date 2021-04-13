import { Injectable } from '@angular/core';
import { Hero } from '../../shared/data/hero';
import { Player } from './player.class';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  players: Player[] = [];
  withArrows: boolean;

  constructor() {
    this.players[0] = new Player();
    this.players[1] = new Player();

    this.players[0].controls = ['KeyW', 'KeyA', 'KeyS', 'KeyD'];
    this.players[1].controls = ['Numpad8', 'Numpad4', 'Numpad5', 'Numpad6'];
  }

  public setPlayerHero(index: number, hero: Hero) {
    this.players[index].hero = hero;
  }
}
