import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import Player from '@/domain/interfaces/domainInterfaces';

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    players: [] as Player[],
    player: null as Player | null,
  }),
  actions: {
    async fetchPlayers() {
      console.log(" Store - Fetching players");
      const response = await axios.get('/players');
      this.players = response.data;
      console.log("Player rows found: " + response.data.length);
    },
    async fetchPlayer(id: number) {
      const response = await axios.get(`/players/${id}`);
      this.player = response.data;
    },
    async updatePlayer(player: Player) {
      await axios.put(`/players/${player.id}`, player);
      await this.fetchPlayers();
    },
    updatePlayerInStore(updatedPlayer: Player) {
      const index = this.players.findIndex(player => player.id === updatedPlayer.id);
      if (index !== -1) {
        this.players[index] = updatedPlayer;
      }
    },
  },
});

