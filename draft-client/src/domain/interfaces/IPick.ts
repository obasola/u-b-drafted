export default interface IPick {
  id: number;
  teamId: number;
  playerId: number;
  player: string;
  selectionRound: number;
  selectionNumber: number;
  selectionYear: string;
  selectionPickFrom: string;
  selectionPickTo: string;
  combineScore: number;
}