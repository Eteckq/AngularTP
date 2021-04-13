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
  arrow:boolean



  constructor(private battleService: BattleService, router: Router) {
    this.player1 = battleService.players[0];
    this.player2 = battleService.players[1];
    this.arrow = battleService.withArrows;

    if (!this.player1.hero || !this.player2.hero) {
      router.navigate(['/arena'])
    }

    this.setupPlayers()

  }

  setupPlayers () {
    for (let player of [this.player1, this.player2]) {
      player.health = player.hero.health * 10
      player.cooldown = 1
      player.startInterval()
    }

  }

  ngOnInit (): void {
    document.addEventListener('keydown', this.handleInputs);
  }
  ngOnDestroy (): void {
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
        }
      }
    }
  }


}
