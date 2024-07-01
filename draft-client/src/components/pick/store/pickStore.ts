import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import Pick from '@/domain/interfaces/domainInterfaces';

export const usePickStore = defineStore('pickStore', {
  state: () => ({
    picks: [] as Pick[],
    pick: null as Pick | null,
  }),
  actions: {
    async fetchPicks() {
      const response = await axios.get('/picks');
      this.picks = response.data;
    },
    async fetchPick(id: number) {
      const response = await axios.get(`/picks/${id}`);
      this.pick = response.data;
    },
    async createPick(pick: Pick) {
      const response = await axios.post('/picks', pick);
      this.picks.push(response.data);
    },
    async updatePick(pick: Pick) {
      await axios.put(`/picks/${pick.id}`, pick);
      await this.fetchPicks();
    },
    updatePickInStore(updatedPick: Pick) {
      const index = this.picks.findIndex(pick => pick.id === updatedPick.id);
      if (index !== -1) {
        this.picks[index] = updatedPick;
      }
    },
  },
});

