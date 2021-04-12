import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { WeaponModule } from '../weapon/weapon.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    CreateHeroComponent,
    EditHeroComponent,
    HeroEditorComponent,
    HeroComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, WeaponModule],
})
export class HeroModule {}
