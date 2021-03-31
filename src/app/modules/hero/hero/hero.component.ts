import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../shared/data/hero';
import { HeroesService } from '../../../shared/services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input()
  hero: Hero;

  getDamage() {
    if (this.hero.weapon?.damage !== 0) {
      if (this.hero.damage + this.hero.weapon.damage <= 0) {
        return 1;
      }
      return this.hero.damage + this.hero.weapon.damage;
    }
    return this.hero.damage;
  }

  getSpeed() {
    if (this.hero.weapon?.speed !== 0) {
      if (this.hero.speed + this.hero.weapon.speed <= 0) {
        return 1;
      }
      return this.hero.speed + this.hero.weapon.speed;
    }
    return this.hero.speed;
  }

  getDodge() {
    if (this.hero.weapon?.dodge !== 0) {
      if (this.hero.dodge + this.hero.weapon.dodge <= 0) {
        return 1;
      }
      return this.hero.dodge + this.hero.weapon.dodge;
    }
    return this.hero.dodge;
  }

  getHealth() {
    if (this.hero.weapon?.health !== 0) {
      if (this.hero.health + this.hero.weapon.health <= 0) {
        return 1;
      }
      return this.hero.health + this.hero.weapon.health;
    }
    return this.hero.health;
  }
}
