import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { HeroesService } from '../../../shared/services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
})
export class CreateHeroComponent implements OnInit {
  hero: Hero = new Hero()
  valid: boolean

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  async create() {
    await this.heroesService.createHero(this.hero.getData());
    this.router.navigate(['/heroes']);
  }

  checkValid(childValid) {
    this.valid=childValid;
  }
}
