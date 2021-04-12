import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../shared/services/heroes.service';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.scss'],
})
export class HeroSelectorComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    //get heroes list (from heroesService)
  }
}
