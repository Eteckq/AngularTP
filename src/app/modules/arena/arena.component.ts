import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/data/hero';
import { HeroesService } from '../../shared/services/heroes.service';
import { BattleService } from './battle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
})
export class ArenaComponent {
  withArrow:boolean
  constructor(private battleService: BattleService, private router: Router) {
    this.withArrow = false;
  }

  selectP1Hero(hero: Hero) {
    this.battleService.setPlayerHero(0, hero);
  }

  selectP2Hero(hero: Hero) {
    this.battleService.setPlayerHero(1, hero);
  }

  startGame() {
    this.router.navigate(['/arena/battle']);
    this.battleService.withArrows = this.withArrow;
  }
}
