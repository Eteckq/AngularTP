import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../data/hero';

const API_HERO = "https://api-heroes.yohangastoud.fr/hero/"
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  public getHeroes(): Promise<Hero[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(API_HERO)
        .toPromise()
        .then((res) => {
          let heroes: Hero[] = [];

          for (const heroData of res as any) {
            heroes.push(new Hero(heroData));
          }
          resolve(heroes);
        });
    });
  }

  public getHero(id: string): Promise<Hero> {
    return new Promise((resolve, reject) => {
      this.http
        .get(API_HERO + id)
        .toPromise()
        .then((res) => {
          resolve(new Hero(res));
        });
    });
  }

  public createHero(hero: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(API_HERO, hero)
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res as any);
        });
    });
  }

  public editHero(hero: any) {
    return new Promise((resolve, reject) => {
      this.http
        .put(API_HERO + hero.id, hero)
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res as any);
        });
    });
  }
}
