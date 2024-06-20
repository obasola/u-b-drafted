// src/store/pickStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import Pick from "@/domain/interfaces/pick";


export const usePickStore = defineStore('pickStore', {
  state: () => ({
    picks: [] as Pick[],
    pick: {} as Pick
  }),
  actions: {
    async fetchPicks() {
      const response = await axios.get<Pick[]>('/picks');
      this.picks = response.data;
    },
    async fetchPickById(id: number) {
      const response = await axios.get<Pick>(`/pick/${id}`);
      this.pick = response.data;
    }
  }
});
