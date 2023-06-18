import { defineStore } from 'pinia';

export const useCombineScoreStore = defineStore('combineScore', {
  state: () => ({
    combineScore: {
      id: 0,
      fortyTime: 0,
      tenYardSplit: 0,
      twentyYard_shuttle: 0,
      threeCone: 0,
      verticalLeap: 0,
      broadJump: 0,
      playerId: 0,
    },
  }),
  getters: {
    getCombineScoreData: (state) => state.combineScore,
  },
  actions: {
    resetCombineScoreData() {
      (this.combineScore.id = 0),
        (this.combineScore.fortyTime = 0),
        (this.combineScore.tenYardSplit = 0),
        (this.combineScore.twentyYard_shuttle = 0),
        (this.combineScore.threeCone = 0),
        (this.combineScore.verticalLeap = 0),
        (this.combineScore.broadJump = 0),
        (this.combineScore.playerId = 0);
    },
  },
});
