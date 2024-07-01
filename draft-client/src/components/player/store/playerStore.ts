import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import Player from '@/domain/interfaces/domainInterfaces';
import PlayerAward from '@/domain/interfaces/domainInterfaces';

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    players: [] as Player[],
    player: null as Player | null,
    awards: [] as PlayerAward[],
  }),
  actions: {
    async createPlayer(player: Player) {
      const response = await axios.post('/players', player);
      this.players.push(response.data);
    },
    async fetchPlayers() {
      console.log(" Store - Fetching players");
      const response = await axios.get<Player[]>('/players');
      this.players = response.data;
      console.log("Player rows found: " + response.data.length);
    },
    async fetchPlayer(id: number) {
      const response = await axios.get<Player>(`/player/${id}`);
      this.player = response.data;
    },

    async fetchPlayerAwards(playerId: number) {
      const { data } = await axios.get<PlayerAward[]>(`/playerAward/${playerId}`);
      this.awards = data;
    },
    async updatePlayer(player: Player) {
      await axios.put(`/player/${player.id}/edit`, player);
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

