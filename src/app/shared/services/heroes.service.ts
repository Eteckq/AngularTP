import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../data/hero';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes$: Observable<Hero[]>;

  constructor(private firestore: AngularFirestore) {
    this.heroes$ = this.firestore.collection<Hero>('heroes').valueChanges();
  }

  public getHeroes(): Observable<Hero[]> {
    return this.heroes$;
  }

  getHero(id: number): Observable<Hero> {
    return of({
      id: 20,
      name: 'Tornado',
      damage: 15,
      health: 15,
      rapidity: 15,
      strength: 5,
    });
  }
}
