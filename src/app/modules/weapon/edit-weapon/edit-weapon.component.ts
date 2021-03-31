import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../shared/data/weapon';
import { WeaponsService } from '../../../shared/services/weapons.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-weapon',
  templateUrl: './edit-weapon.component.html',
  styleUrls: ['./edit-weapon.component.scss'],
})
export class EditWeaponComponent implements OnInit {
  weapon: Weapon;
  id: string
  valid: boolean

  constructor(private weaponesService: WeaponsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getWeapon();
  }

  async getWeapon() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.weapon = await this.weaponesService.getWeapon(this.id);

  }

  async edit() {
    await this.weaponesService.editWeapon(this.weapon.getData());
    this.router.navigate(['/weapons']);
  }

  checkValid(childValid) {
    this.valid=childValid;
  }

  async delete() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.weaponesService.deleteWeapon((this.id))
    this.router.navigate(['/weapons']);
  }


}
