

import { defineStore } from 'pinia';
import { getCombineScores, createCombineScore, getCombineScore } from '@/components/combine/api/CombineScoreService';
import CombineScore from '@/domain/interfaces/domainInterfaces';
import apiClient from '@/utils/axios';

export const useCombineScoreStore = defineStore('combineScoreStore', {
  state: () => ({
    combineScores: [] as CombineScore[],
    selectedCombineScore: null as CombineScore | null,
  }),
  actions: {
    async fetchCombineScores() {
      this.combineScores = (await getCombineScores()).data;
    },
    async createCombineScore(combineScore: CombineScore) {
      await createCombineScore(combineScore);
      this.fetchCombineScores();
    },
    async fetchCombineScore(id: number) {
      this.selectedCombineScore = (await getCombineScore(id)).data;
    },
    async updateCombineScore(updatedScore: CombineScore) {
      try {
        await apiClient.put(`http://localhost:3000/api/combine-scores/${updatedScore.id}`, updatedScore);
        const index = this.combineScores.findIndex(score => score.id === updatedScore.id);
        if (index !== -1) {
          this.combineScores[index] = updatedScore;
        }
      } catch (error) {
        console.error('Error updating combine score:', error);
      }
    },
  }
});
