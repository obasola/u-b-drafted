// src/store/teamStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import Player from "@/domain/interfaces/domainInterfaces";


export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    collection: [] as Player[],
    instance: {} as Player
  }),
  actions: {
    async fetchTeams() {
      const response = await axios.get<Player[]>('/teams');
      this.collection = response.data;
    },
    async fetchTeamById(id: number) {
      const response = await axios.get<Player>(`/team/${id}`);
      this.instance = response.data;
    }
  }
});
