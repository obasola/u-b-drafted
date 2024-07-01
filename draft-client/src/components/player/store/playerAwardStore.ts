// store/playerAwardStore.ts

// stores/playerAwards.ts
import { defineStore } from "pinia";
import axios from "@/utils/axios";
import Player from '@/domain/interfaces/domainInterfaces';

interface PlayerAward {
  id: number;
  playerId: number;
  awardName: string;
  yearAwarded: number;
  Player: Player;
}

export const usePlayerAwardsStore = defineStore("playerAwards", {
  state: () => ({
    playerAwards: [] as PlayerAward[],
    selectedAward: null as PlayerAward | null,
  }),
  actions: {
    async fetchPlayerAwards() {
      try {
        const response = await axios.get<PlayerAward[]>("/playerAwards");
        this.playerAwards = response.data;
        console.log("Nbr awards found: " + response.data.length);
      } catch (error) {
        console.error("Error fetching player awards:", error);
      }
    },
    async fetchPlayerAwardsById(playerId: number) {
      console.log("Calling server-side fetch now for ID: " + playerId);
      const { data } = await axios.get<PlayerAward[]>(`/playerAwards/${playerId}`);
      this.playerAwards = data;
    },
    async addPlayerAward(playerAward: PlayerAward) {
      await axios.post("/playerAwards", playerAward);
      this.fetchPlayerAwards();
    },
    async updatePlayerAward(playerAward: PlayerAward) {
      await axios.put(`/playerAward/${playerAward.id}`, playerAward);
      this.fetchPlayerAwards();
    },
    async deletePlayerAward(id: number) {
      await axios.delete(`/playerAward/${id}`);
      this.fetchPlayerAwards();
    },
    selectAward(award: PlayerAward) {
      this.selectedAward = award;
    },
    clearSelection() {
      this.selectedAward = null;
    },
  },
});
