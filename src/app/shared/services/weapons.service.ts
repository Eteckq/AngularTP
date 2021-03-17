import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Weapon } from '../data/weapon';

@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  weapons$: Observable<Weapon[]>;

  private weaponsCollection: AngularFirestoreCollection<Weapon>;

  constructor(private firestore: AngularFirestore) {
    this.weaponsCollection = this.firestore.collection<Weapon>('weapons');
    this.weapons$ = this.weaponsCollection.valueChanges();
  }

  public getWeapons(): Observable<Weapon[]> {
    return this.weapons$;
  }

  public getWeapon(uuid: string) {
    return new Promise<Weapon>((resolve, reject) => {
      this.weaponsCollection
        .get()
        .toPromise()
        .then((weaponDoc) => {
          if (weaponDoc.docs.length === 0) {
            reject('No documents in DB');
          } else {
            let weapon = weaponDoc.docs
              .filter((d) => d.data().uuid == uuid)[0]
              .data();

            if (weapon) {
              resolve(weapon);
            } else {
              reject('Weapon not found' + uuid);
            }
          }
        });
    });
  }

  public createWeapon(weapon: any) {
    if (!weapon.uuid) {
      weapon.uuid = uuidv4();
    }
    this.weaponsCollection
      .add(weapon)
      .then((e) => {
        console.log('Weapon added', weapon);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
