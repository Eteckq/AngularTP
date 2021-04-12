import { Hero } from '../../shared/data/hero';

export class Player {
  hero: Hero;
  controls: string[];

  getRandomKey() {
    return this.controls[Math.floor(Math.random() * this.controls.length)];
  }
}
