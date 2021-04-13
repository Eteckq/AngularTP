import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() validateEvent = new EventEmitter<boolean>();
  @Input() hero: Hero;
  weapons: Weapon[];
  valid: boolean;

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
    this.isValid();
  }

  noWeapon() {
    this.hero.weapon = null;
    this.isValid();
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
    this.isValid();
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
    this.isValid();
    this.pickArmor()
  }

  isValid() {
    if (this.hero.name == '') {
      this.valid = false;
    } else if (this.hero.getLeftPoints() != 0) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    this.validateEvent.emit(this.valid);
  }

  pickArmor() {
    var diff = (this.hero.health + this.hero.damage) - (this.hero.speed + this.hero.dodge);
    var rand = Math.random() * 100;
    if(diff > 10) { //  super heavy
        this.hero.armorSkin = (rand > 50) ? 'IronArmor' : 'IronPlateArmor';
    } else if (diff > 4) {// heavy
      this.hero.armorSkin = (rand > 50) ? 'FalconLight' : 'ChainmailLightArmor';
    } else if(diff < -10) {// super light
      this.hero.armorSkin = (rand > 50) ? 'HunterLightArmor' : 'HunterTunic';
    } else if (diff < -4) {// light
      this.hero.armorSkin = (rand > 50) ? 'FarmerClothes' : 'BanditLightArmor';
    } else {//  balanced
      this.hero.armorSkin = (rand > 50) ? 'LeatherJacket' : 'LeatherLightArmor';
    }
  }

}
