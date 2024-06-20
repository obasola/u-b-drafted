// src/store/teamStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import CombineScore from "@/domain/interfaces/domainInterfaces";


export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    collection: [] as CombineScore[],
    instance: {} as CombineScore
  }),
  actions: {
    async fetchTeams() {
      const response = await axios.get<CombineScore[]>('/teams');
      this.collection = response.data;
    },
    async fetchTeamById(id: number) {
      const response = await axios.get<CombineScore>(`/team/${id}`);
      this.instance = response.data;
    }
  }
});
