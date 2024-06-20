// src/store/teamStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import Team from "@/domain/interfaces/domainInterfaces";


export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    collection: [] as Team[],
    instance: {} as Team
  }),
  actions: {
    async fetchTeams() {
      const response = await axios.get<Team[]>('/teams');
      this.collection = response.data;
    },
    async fetchTeamById(id: number) {
      const response = await axios.get<Team>(`/team/${id}`);
      this.instance = response.data;
    }
  }
});
