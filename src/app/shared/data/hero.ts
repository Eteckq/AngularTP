import { Weapon } from './weapon';

export class Hero {
  id?: string;
  name: string = '';
  dodge: number = 5;
  speed: number = 5;
  damage: number = 5;
  health: number = 5;
  armorSkin: string = 'BanditLightArmor';
  weapon?: Weapon;

  constructor(data?: any) {
    if (!data) return;
    this.id = data.id;
    this.name = data.name;
    this.dodge = data.dodge;
    this.speed = data.speed;
    this.damage = data.damage;
    this.health = data.health;
    this.weapon = data.weapon;
    this.armorSkin = data.armorSkin;
  }

  public getLeftPoints() {
    return 40 - this.dodge - this.speed - this.damage - this.health;
  }

  public getData() {
    return {
      id: this.id,
      name: this.name,
      speed: this.speed,
      dodge: this.dodge,
      damage: this.damage,
      health: this.health,
      weapon: this.weapon,
      armorSkin: this.armorSkin,
    };
  }
}
