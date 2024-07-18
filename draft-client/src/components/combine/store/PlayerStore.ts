import { defineStore } from 'pinia';
import { getPlayers } from '../api/PlayerService';
import { ref } from 'vue';
import Player from '@/domain/interfaces/Player';

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    players: [] as Player[]
  }),
  actions: {
    async fetchPlayers() {
      this.players = (await getPlayers()).data;
    }
  }
});
