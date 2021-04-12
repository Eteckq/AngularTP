import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/data/hero';
import { HeroesService } from '../../../shared/services/heroes.service';
import { Router } from '@angular/router';

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
