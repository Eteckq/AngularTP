import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/data/hero';
import { HeroesService } from '../../shared/services/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  async getHeroes() {
    this.heroes = await this.heroesService.getHeroes();
  }
}
