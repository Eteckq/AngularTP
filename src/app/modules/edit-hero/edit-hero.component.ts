import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/data/hero';
import { HeroesService } from '../../shared/services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss'],
})
export class EditHeroComponent implements OnInit {
  hero: Hero;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getHero();
  }

  async getHero() {
    const uuid = this.route.snapshot.paramMap.get('id');
    this.hero = await this.heroesService.getHero(uuid);

  }


}
