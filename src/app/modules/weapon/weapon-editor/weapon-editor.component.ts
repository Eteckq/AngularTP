import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeaponsService } from 'src/app/shared/services/weapons.service';
import { Weapon } from 'src/app/shared/data/weapon';

@Component({
  selector: 'app-weapon-editor',
  templateUrl: './weapon-editor.component.html',
  styleUrls: ['./weapon-editor.component.scss'],
})
export class WeaponEditorComponent {
  @Output() validateEvent = new EventEmitter<boolean>();
  @Input() weapon: Weapon;
  id: string
  valid: boolean

  constructor(private weaponService: WeaponsService) {
  }

  isValid() {
    if(this.weapon.name == '') {
      this.valid = false;
    } else if (this.weapon.getDifference() != 0){
      this.valid = false;
    } else {
      this.valid = true;
    }
    this.validateEvent.emit(this.valid);
  }
}
