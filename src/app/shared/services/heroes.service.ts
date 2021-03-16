import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../data/hero';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes$: Observable<Hero[]>;

  private heroesCollection: AngularFirestoreCollection<Hero>;

  constructor(private firestore: AngularFirestore) {
    this.heroesCollection = this.firestore.collection<Hero>('heroes');
    this.heroes$ = this.heroesCollection.valueChanges();
  }

  public getHeroes(): Observable<Hero[]> {
    return this.heroes$;
  }

  public  getHero(uuid: string) {
    return new Promise<Hero>((resolve, reject) => {
      this.heroesCollection
        .get()
        .toPromise()
        .then((heroDoc) => {
          
          if (heroDoc.docs.length === 0) {
            reject('Hero not found' + uuid);
          } else {
            
            let hero = heroDoc.docs[0].data();
            resolve(hero);
          }
        });
    });
  }

  public createHero(hero: Hero) {
    if (!hero.uuid) {
      hero.uuid = uuidv4();
    }
    this.heroesCollection
      .add(hero)
      .then((e) => {
        console.log('Hero added', hero);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
