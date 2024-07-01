import { Player } from '../player/entity';

export class PlayerAward { 
  id: number = 0;
  award_name: string = "";
  year_awarded: number = 0;
  player: Player = new Player('', '', '', '',  '', '', 0);
  playerId: number = 0;
}
