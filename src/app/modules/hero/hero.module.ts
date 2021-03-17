import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { CreateHeroComponent } from "./create-hero/create-hero.component";
import { EditHeroComponent } from "./edit-hero/edit-hero.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    CreateHeroComponent,
    EditHeroComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class HeroModule {}
