import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WeaponsService} from "../../../shared/services/weapons.service";
import {Location} from "@angular/common";
import {Weapon} from "../../../shared/data/weapon";

@Component({
  selector: 'app-weapon-display',
  templateUrl: './weapon-display.component.html',
  styleUrls: ['./weapon-display.component.scss'],
})

export class WeaponDisplayComponent implements OnInit {
  @Input() weapon: Weapon;


  constructor(
    private route: ActivatedRoute,
    private weaponesService: WeaponsService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

}
