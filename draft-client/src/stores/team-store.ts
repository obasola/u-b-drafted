// src/store/teams.ts
import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    team: {
      id: 0,
      name: '',
      city: '',
      state: '',
      conference: '',
    },
    teams: [],
  }),

  actions: {

    async createTeam(team: { id: 0, name: string, city: string, state: string, conference: string }) {
      // Implement API call to add team
    },

    async readMany() {
      // Implement API call to fetch teams
    },

    async readOne() {
      // Implement API call to fetch teams
    },
    async updateTeam(team:  { id: 0, name: string, city: string, state: string, conference: string }) {
      // Implement API call to update team
    },

    async deleteTeam(id: number) {
      // Implement API call to delete team
    },

    resetTeamData() {
      (this.team.id = 0),
        (this.team.name = ''),
        (this.team.city = ''),
        (this.team.state = ''),
        (this.team.conference = '');
    },
  },
});
