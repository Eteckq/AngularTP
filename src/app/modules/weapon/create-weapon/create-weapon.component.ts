import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Weapon } from '../../../shared/data/weapon';
import { WeaponsService } from '../../../shared/services/weapons.service';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.scss'],
})
export class CreateWeaponComponent implements OnInit {
  weapon: Weapon = new Weapon();
  valid: boolean;

  constructor(private weaponsService: WeaponsService, private router: Router) {}

  ngOnInit(): void {}

  async create() {
    await this.weaponsService.createWeapon(this.weapon.getData());
    this.router.navigate(['/weapons']);
  }

  checkValid(childValid) {
    this.valid=childValid;
  }
}
