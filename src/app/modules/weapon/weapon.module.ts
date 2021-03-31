import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { CreateWeaponComponent } from "./create-weapon/create-weapon.component";
import { EditWeaponComponent } from "./edit-weapon/edit-weapon.component";
import { WeaponDetailComponent } from "./weapon-detail/weapon-detail.component";
import { WeaponEditorComponent } from "./weapon-editor/weapon-editor.component";
import { WeaponsComponent } from "./weapons/weapons.component";
import {WeaponDisplayComponent} from "./weapon-display/weapon-display.component";


@NgModule({
  declarations: [WeaponsComponent, CreateWeaponComponent, EditWeaponComponent, WeaponDetailComponent, WeaponEditorComponent, WeaponDisplayComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [
    WeaponDisplayComponent
  ]
})
export class WeaponModule { }
