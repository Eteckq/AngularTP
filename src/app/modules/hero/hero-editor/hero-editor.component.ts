import { Component, Input } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { WeaponsService } from 'src/app/shared/services/weapons.service';
import { Weapon } from 'src/app/shared/data/weapon';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss'],
})
export class HeroEditorComponent {
  @Input() hero: Hero;
  weapons: Weapon[]
  id: string

  constructor(private weaponService: WeaponsService) {
    this.getWeapons()
  }

  async getWeapons(){
    this.weapons = await this.weaponService.getWeapons()
  }

  choseWeapon(weapon: Weapon){
    this.hero.weapon = weapon
    
  }
}
