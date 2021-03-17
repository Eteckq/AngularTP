import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from '../../../shared/data/weapon';
import { Location } from '@angular/common';
import { WeaponsService } from 'src/app/shared/services/weapons.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss'],
})
export class WeaponDetailComponent implements OnInit {
  weapon: Weapon;

  constructor(
    private route: ActivatedRoute,
    private weaponesService: WeaponsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWeapon();
  }

  async getWeapon() {
    const id = this.route.snapshot.paramMap.get('id');    
    this.weapon = await this.weaponesService.getWeapon(id);

  }

  goBack(): void {
    this.location.back();
  }
}
