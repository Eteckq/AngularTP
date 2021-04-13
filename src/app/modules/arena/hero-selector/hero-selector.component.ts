import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { HeroesService } from '../../../shared/services/heroes.service';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.scss'],
})
export class HeroSelectorComponent implements OnInit {
  heroes: Hero[] = [];
  hero: Hero;

  @Output()
  validateEvent = new EventEmitter<Hero>();

  constructor(private heroesService: HeroesService) { }

  ngOnInit () {
    this.getHeroes();
  }

  async getHeroes () {
    this.heroes = await this.heroesService.getHeroes();
    this.hero = this.heroes[0];
    this.validateEvent.emit(this.hero);
  }

  nextHero () {
    var ind = this.heroes.indexOf(this.hero);
    if (ind < this.heroes.length - 1) {
      this.hero = this.heroes[ind + 1];
    } else {
      this.hero = this.heroes[0];
    }

    this.validateEvent.emit(this.hero);
  }

  previousHero () {
    var ind = this.heroes.indexOf(this.hero);

    if (ind >= 1) {
      this.hero = this.heroes[ind - 1];
    } else {
      this.hero = this.heroes[this.heroes.length - 1];
    }

    this.validateEvent.emit(this.hero);
  }
}
