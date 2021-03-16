export class Hero {
  uuid?: string;
  name: string = '';
  strength: number = 5;
  rapidity: number = 5;
  damage: number = 5;
  health: number = 5;


  public getLeftPoints() {
    return 40 - this.strength - this.rapidity - this.damage - this.health;
  }
}
