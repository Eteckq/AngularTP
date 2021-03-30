import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { HeroesService } from '../../../shared/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss'],
})
export class EditHeroComponent implements OnInit {
  hero: Hero;
  id: string;

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  async getHero() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.hero = await this.heroesService.getHero(this.id);
  }

  async edit() {
    await this.heroesService.editHero(this.hero.getData());
    this.router.navigate(['/heroes']);
  }
}
