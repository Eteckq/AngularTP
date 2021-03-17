import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../shared/data/weapon';
import { WeaponsService } from '../../../shared/services/weapons.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
})
export class WeaponsComponent implements OnInit {
  weapons: Weapon[] = [];

  constructor(private weaponsService: WeaponsService) {}

  async ngOnInit() {
    this.weapons = await this.weaponsService.getWeapons();
     
  }
}
