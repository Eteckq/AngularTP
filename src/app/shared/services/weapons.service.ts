import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Weapon } from '../data/weapon';
import { HttpClient } from '@angular/common/http';

const API_WEAPON = 'https://api-heroes.yohangastoud.fr/weapon/';
@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  constructor(private http: HttpClient) {}

  public getWeapons(): Promise<Weapon[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(API_WEAPON)
        .toPromise()
        .then((res) => {
          let weapons: Weapon[] = [];

          for (const weaponData of res as any) {
            weapons.push(new Weapon(weaponData));
          }
          resolve(weapons);
        });
    });
  }

  public getWeapon(id: string): Promise<Weapon> {
    return new Promise((resolve, reject) => {
      this.http
        .get(API_WEAPON + id)
        .toPromise()
        .then((res) => {
          resolve(new Weapon(res));
        });
    });
  }

  public createWeapon(weapon: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(API_WEAPON, weapon)
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res);
        });
    });
  }

  public editWeapon(weapon: any) {
    return new Promise((resolve, reject) => {
      this.http
        .put(API_WEAPON + weapon.id, weapon)
        .toPromise()
        .then((res) => {
          console.log(res);
          resolve(res as any);
        });
    });
  }
}
