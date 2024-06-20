// src/store/combinescores.ts
import { defineStore } from 'pinia';
import api from '../api';

interface CombineScore {
  id: number,
  fortyTime: number,
  tenYardSplit: number,
  twentyYard_shuttle: number,
  threeCone: number,
  verticalLeap: number,
  broadJump: number,
  playerId: number,
}
const URI_SINGLE:string = '/combine/';
const URI_PLURAL:string = '/combines';

export const useCombineScoreStore = defineStore(URI_PLURAL, {

  state: () => ({
    CombineScore: <CombineScore> {
      id: 0,
      fortyTime: 0,
      tenYardSplit: 0,
      twentyYard_shuttle: 0,
      threeCone: 0,
      verticalLeap: 0,
      broadJump: 0,
      playerId: 0,
    },
    combinescores: [] as CombineScore[],
  }),

  actions: {
    async create(combinescore:CombineScore) {
      try {
        const response = await api.post(URI_SINGLE, combinescore);
        this.combinescores.push(response.data);
      } catch (error) {
        console.error('Error adding combinescore:', error);
      }
    },

    async readMany() {
      try {
        const response = await api.get(URI_PLURAL);
        this.combinescores = response.data;
      } catch (error) {
        console.error('Error fetching combinescores:', error);
      }
    },

    async readOne(id: number) {
      try {
        const response = await api.get(URI_SINGLE+'/'+id);
        this.combinescores = response.data;
      } catch (error) {
        console.error('Error fetching combinescores:', error);
      }
    },

    async update(combinescore: CombineScore) {
      try {
        const response = await api.put(URI_SINGLE+`/${combinescore.id}`, combinescore);
        const index = this.combinescores.findIndex((t) => t.id === combinescore.id);
        if (index !== -1) {
          this.combinescores.splice(index, 1, response.data);
        }
      } catch (error) {
        console.error('Error updating combinescore:', error);
      }
    },

    async delete(id: number) {
      try {
        await api.delete(URI_SINGLE+`/${id}`);
        this.combinescores = this.combinescores.filter((combinescore) => combinescore.id !== id);
      } catch (error) {
        console.error('Error deleting combinescore:', error);
      }
    },
  },
});
