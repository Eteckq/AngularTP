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

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.heroesService.createHero(this.hero.getData());
    this.router.navigate(['/heroes']);
  }

  equilibrate(leftpts) {
    if(leftpts > 0) {
      var minstat = this.hero.damage;
      var stat = 0;
      if (this.hero.speed < minstat) {
        minstat = this.hero.speed;
        stat = 1;
      }
      if (this.hero.dodge < minstat) {
        minstat = this.hero.dodge;
        stat = 2;
      }
      if (this.hero.health < minstat) {
        minstat = this.hero.health;
        stat = 3;
      }
      switch (stat) {
        case 0:
          this.hero.damage++;
          break;
        case 1:
          this.hero.speed++;
          break;
        case 2:
          this.hero.dodge++;
          break;
        case 3:
          this.hero.health++;
          break;
      }
      this.equilibrate(leftpts-1);
    } else if(leftpts < 0) {
      var maxstat = this.hero.damage;
      var stat = 0;
      if (this.hero.speed > maxstat) {
        maxstat = this.hero.speed;
        stat = 1;
      }
      if (this.hero.dodge > maxstat) {
        maxstat = this.hero.dodge;
        stat = 2;
      }
      if (this.hero.health > maxstat) {
        maxstat = this.hero.health;
        stat = 3;
      }
      switch (stat) {
        case 0:
          this.hero.damage--;
          break;
        case 1:
          this.hero.speed--;
          break;
        case 2:
          this.hero.dodge--;
          break;
        case 3:
          this.hero.health--;
          break;
      }
      this.equilibrate(leftpts+1);
    }
  }
  randomstat(leftpoints) {
    console.log('leftpoints', leftpoints);
    if(leftpoints > 0) return Math.floor(((Math.random()*100) % leftpoints)) +1;
    else return 1;
  }
  random(){
    this.hero.damage = this.randomstat(this.hero.getLeftPoints())
    this.hero.speed = this.randomstat(this.hero.getLeftPoints())
    this.hero.dodge = this.randomstat(this.hero.getLeftPoints())
    this.hero.health = this.hero.getLeftPoints()
    
  }
}
