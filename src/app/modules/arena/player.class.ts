import { Hero } from '../../shared/data/hero';

const MAX_KEYS = 6;

export class Player {
  hero: Hero;
  controls: string[];

  maxHealth: number = 0;

  health: number = 0;
  damage: number = 0;
  speed: number = 0;
  dodge: number = 0;

  currentKeyCombo: number = 0;
  keyCombo: string[] = [];

  cooldown: number = 0;

  colldownInterval: any;

  successCombo: boolean;

  cooldownOver() {
    this.setNewCombo();
  }

  startInterval() {
    this.colldownInterval = setInterval(() => {
      this.cooldown -= 0.1;
      if (this.cooldown <= 0) {
        this.cooldownOver();
        clearInterval(this.colldownInterval);
      }
    }, 100);
  }

  setNewCombo() {
    this.successCombo = false;
    this.keyCombo = [];
    this.currentKeyCombo = 0;
    for (let i = 0; i < this.getRandomNumberOfKeys(); i++) {
      this.keyCombo.push(this.getRandomKey());
    }
  }

  onKeyDown(key: string) {
    if (this.cooldown > 0) {
      return;
    }

    if (key === this.keyCombo[this.currentKeyCombo]) {
      this.currentKeyCombo++;

      if (this.currentKeyCombo === this.keyCombo.length) {
        this.successCombo = true;
        this.cooldown = 0.5;
        this.startInterval();
      }
    } else {
      this.cooldown = 2;
      this.startInterval();
    }
  }

  getRandomNumberOfKeys() {
    var speed = this.hero.speed;
    var amount = 0;
    if (Math.random() * 100 <= speed * 2) amount++;
    if (Math.random() * 100 <= speed) amount++;
    if (Math.random() * 100 <= speed / 2) amount++;
    if (Math.random() * 100 <= speed / 4) amount++;

    return MAX_KEYS - amount;
  }

  getRandomKey() {
    return this.controls[Math.floor(Math.random() * this.controls.length)];
  }

  attaque(heroAttaquer: Player) {
    this.successCombo = false;
    var damage;
    if(Math.random() * 100 > heroAttaquer.dodge) {
      damage = this.damage;
      heroAttaquer.health -= damage;

    } else {
      damage = 'miss';
    }
    return {damage: damage, attacked: heroAttaquer};


  }

  isDead() {
    return this.health <= 0;
  }
}
