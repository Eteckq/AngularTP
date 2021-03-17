import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CreateHeroComponent } from './modules/create-hero/create-hero.component';
import {EditHeroComponent} from "./modules/edit-hero/edit-hero.component";
import { CreateWeaponComponent } from './modules/create-weapon/create-weapon.component';
import { WeaponsComponent } from './modules/weapons/weapons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    WeaponsComponent,
    HeroDetailComponent,
    DashboardComponent,
    CreateHeroComponent,
    CreateWeaponComponent,
    EditHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
