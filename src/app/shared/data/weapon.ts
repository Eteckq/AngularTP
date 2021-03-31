export class Weapon {
  id: string;
  name: string = '';
  dodge: number = 5;
  speed: number = -5;
  damage: number = -5;
  health: number = 5;
  skin: string = '';

  constructor(data?: any) {
    if (!data) return;
    this.id = data.id;
    this.name = data.name;
    this.dodge = data.dodge;
    this.speed = data.speed;
    this.damage = data.damage;
    this.health = data.health;
    this.skin = data.skin;
  }

  public getDifference() {
    return Math.abs(this.dodge + this.speed + this.damage + this.health);
  }

  public getData() {
    return {
      id: this.id,
      name: this.name,
      speed: this.speed,
      dodge: this.dodge,
      damage: this.damage,
      health: this.health,
      skin: this.skin,
    };
  }
}
