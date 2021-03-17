import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { HeroesService } from '../../../shared/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  async ngOnInit() {
    this.heroes = await this.heroesService.getHeroes();
     console.log(this.heroes);
     
      
  }
}
