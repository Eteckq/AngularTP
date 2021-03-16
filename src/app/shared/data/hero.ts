export class Hero {
  uuid?: string;
  name: string = '';
  dodge: number = 5;
  speed: number = 5;
  damage: number = 5;
  health: number = 5;


  public getLeftPoints() {
    return 40 - this.dodge - this.speed - this.damage - this.health;
  }
}
