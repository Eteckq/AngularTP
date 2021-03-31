import { Component, Input } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { WeaponsService } from 'src/app/shared/services/weapons.service';
import { Weapon } from 'src/app/shared/data/weapon';

const skins = [
  'BanditLightArmor',
  'ChainmailLightArmor',
  'FalconLight',
  'FarmerClothes',
  'HunterLightArmor',
  'HunterTunic',
  'IronArmor',
  'IronPlateArmor',
  'LeatherJacket',
  'LeatherLightArmor',
];

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss'],
})
export class HeroEditorComponent {
  @Input() hero: Hero;
  weapons: Weapon[];

  constructor(private weaponService: WeaponsService) {
    this.getWeapons();
  }

  async getWeapons() {
    this.weapons = await this.weaponService.getWeapons();
  }

  nextArmor() {
    let io = skins.indexOf(this.hero.armorSkin);
    let nextSkin = skins[io + 1];
    if (nextSkin) {
      this.hero.armorSkin = nextSkin;
    } else {
      this.hero.armorSkin = skins[0];
    }
  }

  previousArmor() {
    let io = skins.indexOf(this.hero.armorSkin);
    let previous = skins[io - 1];
    if (previous) {
      this.hero.armorSkin = previous;
    } else {
      this.hero.armorSkin = skins[skins.length - 1];
    }
  }

  choseWeapon(weapon: Weapon) {
    this.hero.weapon = weapon;
  }

  equilibrate(leftpts = this.hero.getLeftPoints()) {
    if (leftpts > 0) {
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
      this.equilibrate(leftpts - 1);
    } else if (leftpts < 0) {
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
      this.equilibrate(leftpts + 1);
    }
  }

  randomstat() {
    return Math.floor((Math.random() * 100) % this.hero.getLeftPoints());
  }

  resetStats() {
    this.hero.damage = 1;
    this.hero.speed = 1;
    this.hero.dodge = 1;
    this.hero.health = 1;
  }
  random() {
    this.resetStats();
    this.hero.damage += this.randomstat();
    this.hero.speed += this.randomstat();
    this.hero.dodge += this.randomstat();
    this.hero.health += this.hero.getLeftPoints();
  }
}
