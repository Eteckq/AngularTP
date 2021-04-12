import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { ArenaComponent } from './arena.component';
import { BattleComponent } from './battle/battle.component';
import { HeroSelectorComponent } from './hero-selector/hero-selector.component';

@NgModule({
  declarations: [ArenaComponent, HeroSelectorComponent, BattleComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class ArenaModule {}
