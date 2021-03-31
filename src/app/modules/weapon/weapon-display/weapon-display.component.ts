import { Component, Input } from '@angular/core';
import { Weapon } from '../../../shared/data/weapon';

@Component({
  selector: 'app-weapon-display',
  templateUrl: './weapon-display.component.html',
  styleUrls: ['./weapon-display.component.scss'],
})
export class WeaponDisplayComponent {
  @Input() weapon: Weapon;

  constructor() {}
}
