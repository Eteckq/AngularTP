import { Component, Input } from '@angular/core';
import { WeaponsService } from 'src/app/shared/services/weapons.service';
import { Weapon } from 'src/app/shared/data/weapon';

@Component({
  selector: 'app-weapon-editor',
  templateUrl: './weapon-editor.component.html',
  styleUrls: ['./weapon-editor.component.scss'],
})
export class WeaponEditorComponent {
  @Input() weapon: Weapon;
  weapons: Weapon[]
  id: string

  constructor(private weaponService: WeaponsService) {
    this.getWeapons()
  }

  async getWeapons(){
    this.weapons = await this.weaponService.getWeapons()
  }
}
