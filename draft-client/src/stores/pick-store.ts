import { defineStore } from 'pinia';
import axios from 'axios';

interface Pick {
  id: number;
  teamId: number;
  selectionRound: number;
  selectionNumber: number;
  selectionYear: string;
  selectionPickFrom: string;
  selectionPickTo: string;
  combineScore: number;
}
export const usePickStore = defineStore('pick', {
  state: () => ({
    pick: {
      id: 0,
      teamId: 0,
      playerId: 0,
      player: '',
      selectionRound: 0,
      selectionNumber: 0,
      selectionYear: '',
      selectionPickFrom: '',
      selectionPickTo: '',
      combineScore: 0,
    },

    picks: new Array<Pick>(),
  }),
  getters: {
    getPickData(state) {
      return state.picks;
    },
  },
  actions: {
    resetPickData() {
      (this.pick.id = 0),
        (this.pick.teamId = 0),
        (this.pick.playerId = 0),
        (this.pick.player = ''),
        (this.pick.selectionRound = 0),
        (this.pick.selectionNumber = 0),
        (this.pick.selectionYear = ''),
        (this.pick.selectionPickFrom = ''),
        (this.pick.selectionPickTo = ''),
        (this.pick.combineScore = 0);
    },
    async fetchPicks() {
      try {
        const data = await axios.get('http://localhost:3000/picks');
        this.picks = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
