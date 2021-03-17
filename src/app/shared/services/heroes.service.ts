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

  public getHero(uuid: string) {
    return new Promise<Hero>((resolve, reject) => {
      this.heroesCollection
        .get()
        .toPromise()
        .then((heroDoc) => {
          if (heroDoc.docs.length === 0) {
            reject('No documents in DB');
          } else {
            let hero = heroDoc.docs
              .filter((d) => d.data().uuid == uuid)[0]
              .data();

            if (hero) {
              resolve(hero);
            } else {
              reject('Hero not found' + uuid);
            }
          }
        });
    });
  }

  public createHero(hero: any) {
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

  public editHero(hero: any) {
    console.log(hero);
    /*this.heroesCollection
      .add(hero)
      .then((e) => {
        console.log('Hero added', hero);
      })
      .catch((e) => {
        console.error(e);
      });*/
  }
}
