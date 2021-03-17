import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { CreateWeaponComponent } from "./create-weapon/create-weapon.component";
import { WeaponsComponent } from "./weapons/weapons.component";


@NgModule({
  declarations: [WeaponsComponent, CreateWeaponComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class WeaponModule {}
