import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { ArenaComponent } from './arena.component';

@NgModule({
  declarations: [ArenaComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class ArenaModule {}
