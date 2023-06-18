import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
  state: () => ({
    team: {
      id: 0,
      name: '',
      city: '',
      state: '',
      conference: '',
    },
  }),
  getters: {
    getTeamData: (state) => state.team,
  },
  actions: {
    resetTeamData() {
      (this.team.id = 0),
        (this.team.name = ''),
        (this.team.city = ''),
        (this.team.state = ''),
        (this.team.conference = '');
    },
  },
});
