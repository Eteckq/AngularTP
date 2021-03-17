export class Weapon {
  uuid?: string;
  name: string = '';
  dodge: number = 5;
  speed: number = -5;
  damage: number = -5;
  health: number = 5;

  public getDifference() {
    return Math.abs(this.dodge + this.speed + this.damage + this.health);
  }

  public getData() {
    return {
      uuid: this.uuid,
      name: this.name,
      speed: this.speed,
      dodge: this.dodge,
      damage: this.damage,
      health: this.health,
    };
  }
}
