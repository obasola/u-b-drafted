import { defineStore } from 'pinia';
import axios from '@/utils/axios';

interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
  division: string;
  stadium: string;
}

export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    teams: [] as Team[],
    team: {} as Team | {
      id: 0,
      name: '',
      city: '',
      state: '',
      conference: '',
      division: '',
      stadium: ''
    },
    homeTeam: {} as Team | {
      id: 0,
      name: '',
      city: '',
      state: '',
      conference: '',
      division: '',
      stadium: ''
    },
    OpposingTeam: {} as Team | {
      id: 0,
      name: '',
      city: '',
      state: '',
      conference: '',
      division: '',
      stadium: ''
    }
  }),
  actions: {
    async createPick(team: Team) {
      const response = await axios.post('/teams', team);
      this.teams.push(response.data);
    },
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
