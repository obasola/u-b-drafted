import { defineStore } from 'pinia';

export interface Team {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
}

export const useTeamStore = defineStore('team', {
  state: () => ({
    teams: [] as Team[],
    entityInstance: null as Team | null,
  }),
  actions: {
    setTeams(teams: Team[]) {
      this.teams = teams;
    },
    updateTeam(updatedTeam: Team) {
      const index = this.teams.findIndex(team => team.id === updatedTeam.id);
      if (index !== -1) {
        this.teams[index] = updatedTeam;
      }
    }
  },
});
