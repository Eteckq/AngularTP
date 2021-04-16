import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BattleService } from '../battle.service';
import { Player } from '../player.class';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent implements OnInit, OnDestroy {
  player1: Player;
  player2: Player;
  arrow: boolean;

  constructor(private battleService: BattleService, router: Router) {
    this.player1 = battleService.players[0];
    this.player2 = battleService.players[1];
    this.arrow = battleService.withArrows;

    if (!this.player1.hero || !this.player2.hero) {
      router.navigate(['/arena']);
    }

    this.setupPlayers();
  }

  statsPlayer(player: Player) {
    player.health = (player.hero.health + player.hero.weapon.health) * 5;
    player.speed = player.hero.speed + player.hero.weapon.speed;
    player.damage = player.hero.damage + player.hero.weapon.damage;
    player.dodge = player.hero.dodge + player.hero.weapon.dodge;

    if (player.health <= 0) player.health = 5;
    if (player.speed <= 0) player.speed = 1;
    if (player.dodge <= 0) player.dodge = 1;
    if (player.damage <= 0) player.damage = 1;
  }

  setupPlayers() {
    for (let player of [this.player1, this.player2]) {
      this.statsPlayer(player);
      player.cooldown = 1;
      player.startInterval();
    }
  }

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleInputs);
  }
  ngOnDestroy (): void {
    this.removeListeners();
  }

  removeListeners () {
    document.removeEventListener('keydown', this.handleInputs)

  }

  handleInputs = (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    for (const player of this.battleService.players) {
      for (const key of player.controls) {
        if (event.code === key) {
          player.onKeyDown(key);
          if (player.successCombo) {
            var attacked =
              player === this.player1 ? this.player2 : this.player1;
            this.displayDamage(player.attaque(attacked))
            if (attacked.isDead()) {
              this.winner(player);
            }
          }
        }
      }
    }
  };

  winner(player: Player) {
    var windiv = document.getElementById('winner');
    windiv.innerText += 'The winner is : ' + player.hero.name;
    windiv.style.visibility = 'visible';
    this.removeListeners();
  }

  displayDamage(damageDealt) {

  }
}
