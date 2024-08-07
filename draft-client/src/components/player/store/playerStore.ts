import { defineStore } from 'pinia';
import axios from '@/utils/axios';
 
 
interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
}
interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  handSize: number;
  armLength: number;
  homeCity: string;
  homeState: string;
  university: string;
  year_entered_league: number,
  pickId: number;
  position: string;
  Team: Team;
  award: PlayerAward;
}
interface PlayerAward {
    id: number;
    playerId: number;
    award_name: string;
    year_awarded: number;
  }

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    players: [] as Player[],
    player: {
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      height:0,
      weight: 0,
      handSize: 0,
      armLength: 0,
      homeCity: '',
      homeState: '',
      university: '',
      year_entered_league: 0,
      pickId: 0,
      position: '',
      Team:  {
        id: 0,
        name: '',
        city: '',
        state: '',
        conference: '',
      },
      award: null as PlayerAward | null,
      
    },
    awards: [] as PlayerAward[],
  }),
  actions: {
    async createPlayer(player: Player) {
      const response = await axios.post('/player', player);
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
      await axios.put(`/player/${player.id}`, player);
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

