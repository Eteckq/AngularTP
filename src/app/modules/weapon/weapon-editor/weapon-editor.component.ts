import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeaponsService } from 'src/app/shared/services/weapons.service';
import { Weapon } from 'src/app/shared/data/weapon';

const skins = [
  'FamilySword',
  'HunterKnife',
  'Machete',
  'MilitiamanShortSword',
  'ShortSword',
  'SlaveSword',
  'SmallAxe',
  'TrainingSword',
  'WoodcutterAxe',
  'WoodenMace',
];
@Component({
  selector: 'app-weapon-editor',
  templateUrl: './weapon-editor.component.html',
  styleUrls: ['./weapon-editor.component.scss'],
})
export class WeaponEditorComponent {
  @Output() validateEvent = new EventEmitter<boolean>();
  @Input() weapon: Weapon;
  valid: boolean;

  constructor(private weaponService: WeaponsService) {}

  isValid() {
    if (this.weapon.name == '') {
      this.valid = false;
    } else if (this.weapon.getDifference() != 0) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    this.validateEvent.emit(this.valid);
  }

  nextWeapon() {
    let io = skins.indexOf(this.weapon.skin);
    let nextSkin = skins[io + 1];
    if (nextSkin) {
      this.weapon.skin = nextSkin;
    } else {
      this.weapon.skin = skins[0];
    }
  }

  previousWeapon() {
    let io = skins.indexOf(this.weapon.skin);
    let previous = skins[io - 1];
    if (previous) {
      this.weapon.skin = previous;
    } else {
      this.weapon.skin = skins[skins.length - 1];
    }
  }
}
