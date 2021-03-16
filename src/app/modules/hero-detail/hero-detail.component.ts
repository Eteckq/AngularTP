import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../shared/data/hero';
import { HeroesService } from '../../shared/services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  async getHero() {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    
    this.hero = await this.heroesService.getHero(uuid);
    
  }

  goBack(): void {
    this.location.back();
  }
}
