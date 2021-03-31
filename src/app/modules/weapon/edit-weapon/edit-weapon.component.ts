import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../shared/data/weapon';
import { WeaponsService } from '../../../shared/services/weapons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-weapon',
  templateUrl: './edit-weapon.component.html',
  styleUrls: ['./edit-weapon.component.scss'],
})
export class EditWeaponComponent implements OnInit {
  weapon: Weapon;
  valid: boolean;

  constructor(
    private weaponsService: WeaponsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWeapon();
  }

  async getWeapon() {
    let id = this.route.snapshot.paramMap.get('id');
    this.weapon = await this.weaponsService.getWeapon(id);
  }

  async edit() {
    await this.weaponsService.editWeapon(this.weapon.getData());
    this.router.navigate(['/weapons']);
  }

  checkValid(childValid) {
    this.valid = childValid;
  }

  async delete() {
    let id = this.route.snapshot.paramMap.get('id');
    await this.weaponsService.deleteWeapon(id);
    this.router.navigate(['/weapons']);
  }
}
