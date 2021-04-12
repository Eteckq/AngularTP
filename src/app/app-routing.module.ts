import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './modules/hero/create-hero/create-hero.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './modules/hero/heroes/heroes.component';
import { EditHeroComponent } from './modules/hero/edit-hero/edit-hero.component';
import { WeaponsComponent } from './modules/weapon/weapons/weapons.component';
import { CreateWeaponComponent } from './modules/weapon/create-weapon/create-weapon.component';
import { EditWeaponComponent } from './modules/weapon/edit-weapon/edit-weapon.component';
import { WeaponDetailComponent } from './modules/weapon/weapon-detail/weapon-detail.component';
import { ArenaComponent } from './modules/arena/arena.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'weapons/create', component: CreateWeaponComponent },
  { path: 'weapons/edit/:id', component: EditWeaponComponent },
  { path: 'weapons/:id', component: WeaponDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/create', component: CreateHeroComponent },
  { path: 'heroes/edit/:id', component: EditHeroComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'arena', component: ArenaComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
