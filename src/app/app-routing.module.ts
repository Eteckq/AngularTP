import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './modules/create-hero/create-hero.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { EditHeroComponent } from './modules/edit-hero/edit-hero.component';
import { WeaponsComponent } from './modules/weapons/weapons.component';
import { CreateWeaponComponent } from './modules/create-weapon/create-weapon.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes/create', component: CreateHeroComponent },
  { path: 'weapons/create', component: CreateWeaponComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'edit/:id', component: EditHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
