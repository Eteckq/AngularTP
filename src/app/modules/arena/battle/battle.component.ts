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

  ngOnInit(): void {}
}
