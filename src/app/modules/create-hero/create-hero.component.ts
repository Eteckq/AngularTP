import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/data/hero';
import { HeroesService } from '../../shared/services/heroes.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
})
export class CreateHeroComponent implements OnInit {
  hero: Hero = {
    damage: 0,
    health: 0,
    name: '',
    rapidity: 0,
    strength: 0,
  };

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  create() {
    this.heroesService.createHero(this.hero);
  }
}
