import { Component, OnInit } from '@angular/core';
import { BattleService } from '../battle.service';
import { Player } from '../player.class';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent implements OnInit {
  player1: Player;
  player2: Player;

  constructor(private battleService: BattleService) {
    this.player1 = battleService.players[0];
    this.player2 = battleService.players[1];
  }

  ngOnInit(): void {
    this.handleInputs();
  }

  handleInputs() {
    document.addEventListener('keydown', (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      for (const player of this.battleService.players) {
        for (const key of player.controls) {
          if (event.code === key) {
            this.onKeyDown(key);
          }
        }
      }
    });
  }

  onKeyDown(key: string) {
    console.log('Key: ' + key);
  }
}
