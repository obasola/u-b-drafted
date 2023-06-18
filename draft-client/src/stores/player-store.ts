import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    player: {
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      height: 0,
      weight: 0,
      handSize: 0,
      armLength: 0,
      homeCity: '',
      homeState: '',
      university: '',
      pickId: 0,
      position: '',
    },
  }),
  getters: {
    getPlayerData: (state) => state.player,
  },
  actions: {
    resetPlayerData() {
      (this.player.id = 0),
        (this.player.firstName = ''),
        (this.player.lastName = ''),
        (this.player.age = 0),
        (this.player.height = 0),
        (this.player.weight = 0),
        (this.player.handSize = 0),
        (this.player.armLength = 0),
        (this.player.homeCity = ''),
        (this.player.homeState = ''),
        (this.player.university = ''),
        (this.player.pickId = 0),
        (this.player.position = '');
    },
  },
});
