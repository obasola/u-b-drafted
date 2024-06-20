import { defineStore } from 'pinia';
import axios from '@/utils/axios';

interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
}

export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    teams: [] as Team[],
    team: null as Team | null,
  }),
  actions: {
    async fetchTeams() {
      const response = await axios.get('/teams');
      this.teams = response.data;
    },
    async fetchTeam(id: number) {
      const response = await axios.get(`/teams/${id}`);
      this.team = response.data;
    },
    async updateTeam(team: Team) {
      await axios.put(`/teams/${team.id}`, team);
      await this.fetchTeams();
    },
  },
});
