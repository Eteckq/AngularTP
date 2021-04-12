import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroModule } from './modules/hero/hero.module';
import { WeaponModule } from './modules/weapon/weapon.module';
import { ArenaModule } from './modules/arena/arena.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeroModule,
    WeaponModule,
    ArenaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
