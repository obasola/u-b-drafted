// src/store/teamStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import Schedule from "@/domain/interfaces/domainInterfaces";


export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    collection: [] as Schedule[],
    instance: {} as Schedule
  }),
  actions: {
    async fetchTeams() {
      const response = await axios.get<Schedule[]>('/teams');
      this.collection = response.data;
    },
    async fetchTeamById(id: number) {
      const response = await axios.get<Schedule>(`/team/${id}`);
      this.instance = response.data;
    }
  }
});
